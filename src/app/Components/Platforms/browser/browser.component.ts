import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent {

  counter=20
  gamesBrowser : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGamePlatformBrowser().subscribe((game)=>{
      this.gamesBrowser = game.slice(0,this.counter)
    })
  }
 loadMore(){
    this._gameServices.getGamePlatformBrowser().subscribe((game)=>{
      this.counter += 12
      this.gamesBrowser = game.slice(0,this.counter)
    })
  }
}
