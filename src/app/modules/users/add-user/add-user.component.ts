import { Component, OnInit } from '@angular/core';
import { userModel } from '../users.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user:userModel = {}
  allUsers:any = []

  ngOnInit(): void {
    this.api.getAllUserAPI().subscribe((result:any)=>{
      this.allUsers = result
    })
  }

  constructor(private api:ApiService,private router:Router){}

  cancel(){
    this.user = {}
  }
  addUser(){

    const existingUser = this.allUsers.find((item:any)=>item.id==this.user.id)
    if(existingUser){
      alert("Id already exist!!! use unique id to add user")
    }
    else{
      this.api.saveUserAPI(this.user).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfullt added to our DB`)
          this.router.navigateByUrl('/users')
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }

  }
}
