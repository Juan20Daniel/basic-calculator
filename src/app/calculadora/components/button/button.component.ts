import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnValue:string|number = '';
  @Output() value:EventEmitter<string|number> = new EventEmitter();

  excecute():void {
    this.value.emit(this.btnValue);
  }
}
