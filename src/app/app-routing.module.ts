import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { DetailcartComponent } from './detailcart/detailcart.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'cart',component:CartComponent},
  {path:'detailcart/:id',component:DetailcartComponent},
  {path:'contact',component:ContactComponent},
  {path:'shop',component:ShopComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
