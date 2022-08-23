import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.scss'],
})
export class RectComponent implements OnInit 
{
  @Input() character : string;
  @Input() status : string;

  constructor() {}

  ngOnInit() {}

  getRectClass(){
    return "rect " + this.status;
  }

  setConfig(character: string){
    
  }
}
