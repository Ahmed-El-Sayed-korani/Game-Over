import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.css']
})
export class RelevanceComponent {
  counter=20
  gamesSortby : any[] = []

  @Input() game:any;

  constructor( private _gameServices : gameService){
    this._gameServices.getGameSortbyRelevance().subscribe((game)=>{
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
 loadMore(){
    this._gameServices.getGameSortbyRelevance().subscribe((game)=>{
      this.counter += 12
      this.gamesSortby = game.slice(0,this.counter)
    })

  }
  

}
