
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars: CarDetails[] = [];
  currentCar: Car;
  carImages: CarImage[] = [];
  default: Car; 
  dataLoaded = false;
  currentImage:CarImage;
  carDetails : Car[] = [];
  carDetailss:Car;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['brandId']) {
        this.getCarsByColor(param['colorId']);
      } else if (param['colorId']) {
        this.getCarsByBrand(param['brandId']);
      } else if (param['carId']){
        this.getCarImagesByCarId(param['carId']);
      }else {
        this.getCarDetails(param['carId']);
        this.getCarDetailByCarId(param['carId']);
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
    this.carImageService.getCarImageByCar(carId).subscribe(response=>{
     this.carImages=response.data;
     console.log(response);
    })  
  }

  getCarDetailByCarId(carId:number)
  {
    this.carService.getCarDetailByCarId(carId).subscribe(response => {
      this.carDetailss = response.data[0];
      console.log(response.data);
      this.dataLoaded=true;
    });
  }

  setCurrentAllCar() {
    this.currentCar = this.default;
  }

  getCurrentAllCarClass() {
    if (this.currentCar == this.default) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }  
  getSliderClassName(carImage:CarImage){
    if(this.currentImage ==carImage){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }

  }
}