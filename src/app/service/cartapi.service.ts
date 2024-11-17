import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cart:any [] = []
  product = new BehaviorSubject<any[]>([])
  
  constructor(private http:HttpClient) { }
  getproduct(){
    return this.product.asObservable()
  }
  addtocart(data:any){
    this.cart.push(data)
    this.product.next(this.cart)
  }
}
