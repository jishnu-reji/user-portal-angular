import { Component, OnInit } from '@angular/core';
import { ApiService } from '../modules/users/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userCount:number=0
  sidebarStatus:boolean=true
  adminName:string=""
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    this.api.getAllUserAPI().subscribe((result:any)=>{
      this.userCount=result.length
      this.adminName=result[0].name 
    })
  }

  menuClicked(){
    this.sidebarStatus=!this.sidebarStatus
  }
  adminChange(event:any){
    this.adminName = event
  }
  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('')
  }
}
