import { Component } from '@angular/core';
import { GameInstance } from 'src/Gameplay/gameInstance';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  clavier: string[] = [
    "a",
    "z", 
    "e", 
    "r", 
    "t", 
    "y", 
    "u", 
    "i", 
    "o", 
    "p", 
    "q", 
    "s", 
    "d", 
    "f", 
    "g", 
    "h", 
    "j", 
    "k", 
    "l", 
    "m", 
    "w", 
    "x", 
    "c", 
    "v", 
    "b", 
    "n",
    "del",
    "enter"
    ];

  constructor() {
  }

  public setInputPress(inputChar : string){
    let char = inputChar.replace(" ", null);
    if(char === "del")
    {
      this.removeChar();
    }
    else if(char === "enter")
    {
      this.validateEntry();
    }
    else
    {
      GameInstance.addCharacterToKeyboard(char);
    }
  }

  public removeChar(){
    GameInstance.removeLastCharacterFromKeyboard();
  }

  public validateEntry(){
    GameInstance.validateKeyboardEntry();
  }
}
