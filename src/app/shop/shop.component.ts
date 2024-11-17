import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
product:any
constructor(private api:ApiService,private cartapi:CartapiService){}
ngOnInit(): void {
  this.api.getprductlist().subscribe((a:any)=>{
   this.product = a
  })
}
addtocart(data:any){
  this.cartapi.addtocart(data)
}
}
