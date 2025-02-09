import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CalculadoraComponent } from './pages/main-page/calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalculadoraComponent,
    ScreenComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
