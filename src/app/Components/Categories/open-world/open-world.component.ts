import { Component, Input } from '@angular/core';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.css']
})
export class OpenWorldComponent {
  gamesCategories : any[] = []
  @Input() game:any;
  constructor( private _gameServices : gameService){
    this._gameServices.getGameCategoriesOpenWorld().subscribe((game)=>{
      this.gamesCategories = game
    })
  }

}
