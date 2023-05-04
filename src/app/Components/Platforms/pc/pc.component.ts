import { Component, Input } from '@angular/core';

import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent {

  counter=20
  gamesPc : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGamePlatformPc().subscribe((game)=>{
      this.gamesPc = game.slice(0,this.counter)
    })
  }
  loadMore(){
    this._gameServices.getGamePlatformPc().subscribe((game)=>{
      this.counter+=12
      this.gamesPc = game.slice(0,this.counter)
    })
  }
}
