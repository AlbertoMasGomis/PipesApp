import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  public title = 'AlBertO MaS';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
