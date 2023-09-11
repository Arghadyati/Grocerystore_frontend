import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 constructor(private http:HttpClient){

 }
 selcat(){
  return this.http.get("https://serverside-e9jb.onrender.com/cat/sel");


 }
   selpro(){
    return this.http.get("https://serverside-e9jb.onrender.com/pro/sel");
 
 
   }
  
}

