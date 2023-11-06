import { Component } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent {
  color = "red";
  show= false;
  action = "hide";
  childFavoriteColor : string | undefined;
  changeAppearance = () => {
    this.show = !this.show;
    if (this.action === "hide") {
      this.action = "show";
    }else {
      this.action = "hide";
    }
  }
  applyColor = (value : string) => {
    this.childFavoriteColor = value;
  }
}
