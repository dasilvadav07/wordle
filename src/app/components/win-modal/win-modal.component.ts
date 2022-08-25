import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameInstance } from 'src/Gameplay/gameInstance';
import { GameStorage } from 'src/Gameplay/GameStorage';
import { MatrixComponent } from '../matrix/matrix.component';

@Component({
  selector: 'app-win-modal',
  templateUrl: './win-modal.component.html',
  styleUrls: ['./win-modal.component.scss'],
})
export class WinModalComponent implements OnInit {
  words: string[] = [];
  tries: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.words = this.getAllWords();
    this.tries = this.getTries();
  }

  public getAllWords() : string[]
  {
    return GameStorage.getWords();
  }

  public getTries() : number
  {
    return GameStorage.getTries();
  }

  onClick(){
    GameInstance.isWin = true;
    window.location.reload();
  }

}
