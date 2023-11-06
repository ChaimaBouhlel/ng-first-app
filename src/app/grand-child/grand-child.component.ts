import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {
  @Input() color = "green";
  myFavoriteColor: string = "pink";
  @Output() applyColorEmitter = new EventEmitter();
  applyColor() {
    this.applyColorEmitter.emit(this.myFavoriteColor)
  }
}
