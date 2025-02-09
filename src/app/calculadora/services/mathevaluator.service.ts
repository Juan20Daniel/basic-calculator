import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';
@Injectable({
  providedIn: 'root'
})
export class MathevaluatorService {

  constructor() { }
  calculator(expretion:string|number):number|string {
    try {
      let clearExpretion = expretion.toString().replace(/x/g, '*');
      return evaluate(clearExpretion);
    } catch (error) {
      return 'Expreción no valida';
    }
  }
}
