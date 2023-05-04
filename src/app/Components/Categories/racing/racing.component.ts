import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesRacing().subscribe((game)=>{
      this.gamesCategories = game
    })
  }
}
