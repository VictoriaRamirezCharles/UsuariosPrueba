import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {
this.getUsers();


   }
  
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=70');
    
  }
  getUsersDetails() {
    return this.http.get('https://randomuser.me/api/?nat=gb');
  }
}