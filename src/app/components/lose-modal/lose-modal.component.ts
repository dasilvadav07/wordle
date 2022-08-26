import { Component, OnInit } from '@angular/core';
import { GameInstance } from 'src/Gameplay/gameInstance';

@Component({
  selector: 'app-lose-modal',
  templateUrl: './lose-modal.component.html',
  styleUrls: ['./lose-modal.component.scss'],
})
export class LoseModalComponent implements OnInit {
  word: string;

  constructor() { this.word = GameInstance.wordGoal; }

  ngOnInit() {
    
  }

  onClick(){
    GameInstance.isLose = true;
    window.location.reload();
  }

}
