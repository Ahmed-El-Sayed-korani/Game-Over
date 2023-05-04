import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-alphabtical',
  templateUrl: './alphabtical.component.html',
  styleUrls: ['./alphabtical.component.css']
})
export class AlphabticalComponent {
  counter=20
  gamesSortby : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    
    this._gameServices.getGameSortbyAlphabetical().subscribe((game)=>{
      this.gamesSortby = game.slice(0,this.counter)
    })
  }
 loadMore(){
    this._gameServices.getGameSortbyAlphabetical().subscribe((game)=>{
      this.counter += 12
      this.gamesSortby = game.slice(0,this.counter)
    })
  }

}
