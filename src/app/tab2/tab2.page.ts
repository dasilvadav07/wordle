import { Component } from '@angular/core';
import { GameStorage } from 'src/Gameplay/GameStorage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  words: string [] = [];
  tries: string;
  showOrHide: boolean = true;
  constructor() {
    this.words = this.getAllWords();
    this.tries = (this.getTries()/this.words.length).toFixed(2);
  }

  showAndHide() {
    this.showOrHide = !this.showOrHide;
  }

  public getAllWords() : string[]
  {
    return GameStorage.getWords();
  }

  public getTries() : number
  {
    return GameStorage.getTries();
  }

}
