import {Component} from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {
  color = "blue"
  changeColor = (input: { value: string; }) => {
    this.color = input.value;
    input.value = ""
  }
}
