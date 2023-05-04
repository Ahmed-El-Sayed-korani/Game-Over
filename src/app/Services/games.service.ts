import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class gameService {

 


  constructor(private _HttpClient : HttpClient, private _Router: Router) {

   }
   

   getAllGames():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }

  
  getGameDetails(gameId:string):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }

  getGamePlatformPc():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGamePlatformBrowser():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }

  getGameSortbyReleaseDate():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameSortbyPopularity():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameSortbyAlphabetical():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameSortbyRelevance():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesRacing():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesSports():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesSocial():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=social`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesShooter():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  
  getGameCategoriesOpenWorld():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesZombie():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=zombie`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesFantasy():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=fantasy`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesActionRpg():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=action-rpg`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesAction():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=action`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesFlight():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=flight`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
  getGameCategoriesBattleRoyale():Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale`,
    {headers : {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68','X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}})
  }
}
