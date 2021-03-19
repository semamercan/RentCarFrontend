import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentCarFrontend';
  user:string = 'Sema Mercan'; //string yaparak tip güvenliğini sağlarız.
}
