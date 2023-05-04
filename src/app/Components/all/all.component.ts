import { Component, Input  } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent {

  name:any 
  games : any[] = []
  counter=20
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getAllGames().subscribe((game)=>{
      this.games = game.slice(0,this.counter)
    })
  }
  loadMore(){
    this._gameServices.getAllGames().subscribe((game)=>{
      this.counter+=12
      this.games = game.slice(0,this.counter)
    })
  }
 }

  




