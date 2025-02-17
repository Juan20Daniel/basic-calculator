import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {
  @Input() handleScreen!:string;
  @Input() inputValue!:string|number;
  @Input() dato!: number;
}
