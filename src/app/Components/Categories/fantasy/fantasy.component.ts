import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.css']
})
export class FantasyComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesFantasy().subscribe((game)=>{
      this.gamesCategories = game
    })
  }

}
