import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ScreenComponent } from './calculadora/components/screen/screen.component';
import { ButtonComponent } from './calculadora/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ScreenComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
