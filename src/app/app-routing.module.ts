import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path:'', pathMatch:"full",component:CarDetailsComponent}, //Hiçbir şey seçilmezse default olarak gösterilecek yer
  // boş vermek bütün adresler için geçerli pathMatch anasayfa için veriliyor*/ 
  { path:"car", component:CarDetailsComponent},
  { path:"brand", component:BrandComponent},
  { path:"color", component:ColorComponent},
  { path:"rent", component:RentalComponent},
  { path:"user", component:UserComponent},
  { path:"carImage", component:CarDetailsComponent},
  { path: 'cars/brand/:brandId', component: CarDetailsComponent},
  { path: 'cars/color/:colorId', component: CarDetailsComponent},
  { path: 'rentals/brand/:brandId', component: RentalComponent},
  { path: 'rentals/color/:colorId', component: RentalComponent},
  {path:"car-details/:carId", component:CarDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
