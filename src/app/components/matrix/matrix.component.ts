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

  public goal : string;

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
    let ignoreChar : string[] = [];
    for(let i = 0; i < word.length; i++)
    {
      let char = word.charAt(i);
      //let column = this.columns[i];
      
      let countInGoal = this.count(this.goal, char);
      let countInWord = this.count(word, char);

      this.columns[i].character = char;

      if(char === this.goal.charAt(i)){
        this.columns[i].status = "correct";
        corrects += 1;
        this.highlightKeyboard(char, "correct");
        continue;
      }
      if((countInWord > 0 && countInWord <= countInGoal) && char !== this.goal.charAt(i))
      {        

        if(ignoreChar.includes(char) || ignoreChar == null){
          continue;
        }else{
          ignoreChar.push(char);
        }
        console.log(this.columns);
        
        this.columns[i].status = "wrong";
        this.highlightKeyboard(char, "wrong");
        continue;
      }

      this.highlightKeyboard(char, "error");
    }

    return (corrects === word.length);
  }

  public fill(word : string){
    for(let i = 0; i < this.columns.length; i++)
    {
      this.columns[i].status = null;
      this.columns[i].character = null;
    }
    for(let i = 0; i < word.length; i++)
    {
      let char = word.charAt(i);
      let column = this.columns[i];
      column.character = char;
      column.status = null;
    }
  }

  public focus(index : number){
    if(index < this.columns.length){
      this.columns[index].status = "focus";
    }
  }

  private count(word : string, char : string) : number
  {
    let c = 0;
    for (let i = 0; i < word.length; i++) {
      if(word.charAt(i) === char){
        c += 1;
      }
    }

    return c;
  }

  private highlightKeyboard(key : string, status : string){
    let keyElement = document.getElementById(`key_${key.toLowerCase()}`);
    if(keyElement === null){
      return;
    }
    keyElement.classList.add(status);
  }
}