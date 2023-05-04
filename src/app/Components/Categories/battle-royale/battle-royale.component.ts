import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-battle-royale',
  templateUrl: './battle-royale.component.html',
  styleUrls: ['./battle-royale.component.css']
})
export class BattleRoyaleComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesBattleRoyale().subscribe((game)=>{
      this.gamesCategories = game
    })
  }

}
