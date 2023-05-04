import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesFlight().subscribe((game)=>{
      this.gamesCategories = game
    })
  }

}
