import {Component, ViewChild} from '@angular/core';
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

  message!: string;
  @ViewChild(ChildComponent) child: any;

  /*Tenemos que esperar a que la vista esté totalmente cargada para acceder a los atributos del hijo*/
  ngAfterViewInit() {
    this.message = this.child.message;
  }

}
