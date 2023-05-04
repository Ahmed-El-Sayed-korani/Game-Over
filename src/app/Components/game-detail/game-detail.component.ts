import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gameService } from 'src/app/Services/games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
  gameId : any;
  gameDetails : any ; 
  constructor(private _ActivatedRoute:ActivatedRoute, private _gameServices : gameService){
    _ActivatedRoute.paramMap.subscribe((params)=>{
      this.gameId = params.get('id')
      _gameServices.getGameDetails(this.gameId).subscribe((game)=>{
        this.gameDetails=game
      })
    })
  }
}
