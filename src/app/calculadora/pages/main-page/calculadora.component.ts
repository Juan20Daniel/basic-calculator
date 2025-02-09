import { Component } from '@angular/core';
import { MathevaluatorService } from '../../services/mathevaluator.service';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  screenValue:string | number = '';
  btnPower = 'ON';
  constructor(private mathEvaluator:MathevaluatorService) {}

  power(value:any):void {
    if(value === 'ON') {
      this.btnPower = 'OFF';
    } else {
      this.btnPower = 'ON';
      this.clearScreen();
    }
  }
  getBtnValue(value:number|string):void {
    if(this.btnPower === 'ON') return;
    this.screenValue = this.screenValue+''+value;
  }
  clearScreen():void {
    this.screenValue = '';
  }
  calc():void {
    this.screenValue = this.mathEvaluator.calculator(this.screenValue);
  }
}
