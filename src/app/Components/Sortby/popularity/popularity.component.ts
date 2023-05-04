import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent {
  counter=20
  gamesSortby : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameSortbyPopularity().subscribe((game)=>{
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
 loadMore(){
    this._gameServices.getGameSortbyPopularity().subscribe((game)=>{
      this.counter += 12
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
}
