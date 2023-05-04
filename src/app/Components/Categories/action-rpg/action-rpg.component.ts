import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-action-rpg',
  templateUrl: './action-rpg.component.html',
  styleUrls: ['./action-rpg.component.css']
})
export class ActionRpgComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesActionRpg().subscribe((game)=>{
      this.gamesCategories = game
    })
  }
}
