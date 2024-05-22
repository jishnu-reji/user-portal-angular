import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="https://user-portal-server-gw1q.onrender.com"
  constructor(private http:HttpClient) { }

  saveUserAPI(user:userModel){
    return this.http.post(`${this.server_url}/users`,user)
  }

  getAllUserAPI(){
    return this.http.get(`${this.server_url}/users`)
  }

  getAUserAPI(id:any){
    return this.http.get(`${this.server_url}/users/${id}`)
  }

  updateUserAPI(user:userModel){
    return this.http.put(`${this.server_url}/users/${user.id}`,user)
  }

  removeUserAPI(id:any){
    return this.http.delete(`${this.server_url}/users/${id}`)
  }


}
