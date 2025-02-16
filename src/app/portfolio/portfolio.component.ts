import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isHidden: boolean = true;

  modelImg: string = '';

  imgItems: string[] = [
    "/imgsangular/poert1.png",
    "/imgsangular/port2.png",
    "/imgsangular/port3.png",
    "/imgsangular/poert1.png",
    "/imgsangular/port2.png",
    "/imgsangular/port3.png",
  ];
  hideModel(elememtTarget: any, imgRef: any): void {
    if (elememtTarget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }

}
