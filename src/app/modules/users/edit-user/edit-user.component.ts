import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { userModel } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  user:userModel={}

  constructor(private route:ActivatedRoute, private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      const {id}= result
      console.log(id);
      this.getUserDetails(id)
    })
  }

  getUserDetails(id:any){
    this.api.getAUserAPI(id).subscribe((result:any)=>{
      this.user = result
      console.log(this.user);      
    })
  }

  cancel(id:any){
    this.getUserDetails(id)
  }

  updateUser(){
    this.api.updateUserAPI(this.user).subscribe((result:any)=>{
      alert("User updated successfully")
      this.router.navigateByUrl('/users')      
    })
  }

}
