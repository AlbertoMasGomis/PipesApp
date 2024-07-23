import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
public nameLowerCase: string = 'alberto';
public nameUpperCase: string = 'alberto';
public fullName: string = 'aLBeRTo mAs';
}
