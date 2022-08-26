import { Component } from '@angular/core';
import { GameInstance } from 'src/Gameplay/gameInstance';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  win: boolean = true;
  lose: boolean = true;
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

  constructor(private vibration : Vibration, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
      this.vibration.vibrate(500);
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
    this.win= GameInstance.isWin;
    this.lose = GameInstance.isLose;
  }
}
