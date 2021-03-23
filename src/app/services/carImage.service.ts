import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44383/api/carImages/"

  constructor(private httpClient:HttpClient) { }

  getCarImageByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl+"getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}