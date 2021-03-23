import { CarImage } from "./carImage";

export interface CarDetails {
    carId: number;
    brandName: string;
    colorName: string;
    dailyPrice: number; 
    carImage : CarImage[]; 
    imagePath:string; 
  }