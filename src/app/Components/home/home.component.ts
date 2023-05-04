import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { gameService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  games : any[] = []

  @Input() game:any;
  
  constructor(private _Router:Router, private _gameServices : gameService){
    if (localStorage.getItem('token') == null) {
      _Router.navigate(['/login'])
    } 

    this._gameServices.getAllGames().subscribe((game)=>{
      this.games = game.slice(7,10)
    })
}

}
