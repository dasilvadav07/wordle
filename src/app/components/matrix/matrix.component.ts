import { Component, OnInit } from '@angular/core';
import { GameInstance } from 'src/Gameplay/gameInstance';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit {

  rows : MatrixRow[];

  wrong : string = "wrong";
  correct : string = "correct";

  goal : string;

  constructor() {
    this.rows = [];
  }

  ngOnInit() {
    GameInstance.setMatrix(this);
  }

  public draw(goal : string, rows : number)
  {
    for(let i = 0; i < rows; i++)
    {
      let row = new MatrixRow(goal);
      this.rows.push(row);
    }

    this.goal = goal;
  }
}

export class RectData{
  public character : string;
  public status : string;

  constructor(character : string, status : string){
    this.character = character;
    this.status = status;
  }
}

export class MatrixRow
{
  public columns : RectData[];

  private goal : string;

  public constructor(wordGoal : string)
  {
    this.columns = [];
    for (var i = 0; i < wordGoal.length; i++) 
    {
      this.columns.push(new RectData(null, null));
    }
    this.goal = wordGoal;
  }

  public verify(word : string) : boolean{
    let corrects : number = 0;
    for(let i = 0; i < word.length; i++)
    {
      let char = word.charAt(i);
      let column = this.columns[i];

      column.character = char;
      if(char === this.goal.charAt(i)){
        column.status = "correct";
        corrects += 1;
        continue;
      }
      else if(this.goal.includes(char))
      {
        column.status = "wrong";
      }
    }

    return (corrects === word.length);
  }

  public fill(word : string){
    for(let i = 0; i < this.columns.length; i++)
    {
      this.columns[i].character = '';
    }
    for(let i = 0; i < word.length; i++)
    {
      let char = word.charAt(i);
      let column = this.columns[i];
      column.character = char;
      column.status = null;
    }
  }
}