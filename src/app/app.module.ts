import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//Configuración del local de la app
import { registerLocaleData } from '@angular/common';
import localEsHn from '@angular/common/locales/es-HN';
import localFrCA from '@angular/common/locales/fr-CA';
registerLocaleData(localEsHn);
registerLocaleData(localFrCA);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
  ],
  //Poniendo este provide, con locale_id establece esa date local. (De arriba importado)
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
