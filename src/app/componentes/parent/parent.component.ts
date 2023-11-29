import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  mensaje = "Este mensaje se crea en el padre y se pasa al hijo"
  constructor() {
  }
}
