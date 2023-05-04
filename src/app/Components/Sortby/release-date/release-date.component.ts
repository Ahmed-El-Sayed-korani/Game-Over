import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.css']
})
export class ReleaseDateComponent {
  counter=20
  gamesSortby : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){ 
    this._gameServices.getGameSortbyReleaseDate().subscribe((game)=>{
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
 loadMore(){
    this._gameServices.getGameSortbyReleaseDate().subscribe((game)=>{
      this.counter += 12
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
}
