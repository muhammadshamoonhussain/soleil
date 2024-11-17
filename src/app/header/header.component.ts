import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  total:number = 0
  constructor(private cartapi:CartapiService){}
ngOnInit(): void {
  this.cartapi.product.subscribe((a:any)=>{
    this.total = a.length
    console.log(this.total);
    
  })
}
}
