import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private url:string ='http://localhost:3000'

  getprduct(data:any){
    return this.http.post(`${this.url}/product`,data)
  }
  getprductlist(){
    return this.http.get(`${this.url}/product`)
  }
}
