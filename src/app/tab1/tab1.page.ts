import { Component } from '@angular/core';
import { GameInstance } from 'src/Gameplay/gameInstance';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  win: boolean = true;
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

  constructor(private vibration: Vibration) {

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

  isClicked(event: any) {
    setTimeout(() => {
      event.target.classList.toggle('btn-clicked')
    }, 150);
    event.target.classList.toggle('btn-clicked');
  }

  public removeChar(){
    GameInstance.removeLastCharacterFromKeyboard();
  }

  public validateEntry(){
    GameInstance.validateKeyboardEntry();
    this.vibration.vibrate(500);
    this.win= GameInstance.isWin;
  }
}
