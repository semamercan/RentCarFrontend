import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars:CarDetails[]=[];
  images:CarImage[]=[];
  dataLoaded=false;
  rentalsByCarId:Rental[];
  rentals:Rental[];
  carImageBasePath = "https://localhost:44383/carImages/";
  carDetails:CarDetails[]=[];

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private CarImageService:CarImageService,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['colorId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['carId']){
        this.getCarImagesByCarId(params['carId']);
      }else {
        this.getCarDetails(params['carId']);
      }
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarsDetails(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded=true;
    });
  }

  getCarImagesByCarId(carId:number){
    this.CarImageService.getCarImageByCar(carId).subscribe(response=>{
     this.images=response.data;
     console.log(response);
    })  
  }

  check(id:number){
    this.rentals.find(function(element){
      if(element.Id===id && element.returnDate===null){
        return false //araç teslim edilmediği için kiralanamaz.
      }
      else{
        return true //araç kiralanabilir.
      }
    })
   }

   sliderItemActive(index: number){
    if(index === 0){
      return "carousel-item active";
    }
    else{
      return "carousel-item";
    }
  } 

}
