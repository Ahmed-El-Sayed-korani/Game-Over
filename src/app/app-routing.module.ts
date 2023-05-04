import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './Components/all/all.component';
import { ActionRpgComponent } from './Components/Categories/action-rpg/action-rpg.component';
import { ActionComponent } from './Components/Categories/action/action.component';
import { BattleRoyaleComponent } from './Components/Categories/battle-royale/battle-royale.component';
import { FantasyComponent } from './Components/Categories/fantasy/fantasy.component';
import { FlightComponent } from './Components/Categories/flight/flight.component';
import { OpenWorldComponent } from './Components/Categories/open-world/open-world.component';
import { RacingComponent } from './Components/Categories/racing/racing.component';
import { ShooterComponent } from './Components/Categories/shooter/shooter.component';
import { SocialComponent } from './Components/Categories/social/social.component';
import { SportsComponent } from './Components/Categories/sports/sports.component';
import { ZombieComponent } from './Components/Categories/zombie/zombie.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { JoinFreeComponent } from './Components/join-free/join-free.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BrowserComponent } from './Components/Platforms/browser/browser.component';
import { PcComponent } from './Components/Platforms/pc/pc.component';
import { AlphabticalComponent } from './Components/Sortby/alphabtical/alphabtical.component';
import { PopularityComponent } from './Components/Sortby/popularity/popularity.component';
import { ReleaseDateComponent } from './Components/Sortby/release-date/release-date.component';
import { RelevanceComponent } from './Components/Sortby/relevance/relevance.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'JoinFree',component:JoinFreeComponent},
  {path:'All',canActivate:[AuthGuard],component:AllComponent},
  {path:'games/Platforms/pc',canActivate:[AuthGuard],component:PcComponent},
  {path:'games/Platforms/browser',canActivate:[AuthGuard],component:BrowserComponent},
  {path:'games/sort-by/release-date',canActivate:[AuthGuard],component:ReleaseDateComponent},
  {path:'games/sort-by/popularity',canActivate:[AuthGuard],component:PopularityComponent},
  {path:'games/sort-by/alphabetical',canActivate:[AuthGuard],component:AlphabticalComponent},
  {path:'games/sort-by/relevance',canActivate:[AuthGuard],component:RelevanceComponent},
  {path:'games/Categories/racing',canActivate:[AuthGuard],component:RacingComponent},
  {path:'games/Categories/sports',canActivate:[AuthGuard],component:SportsComponent},
  {path:'games/Categories/social',canActivate:[AuthGuard],component:SocialComponent},
  {path:'games/Categories/shooter',canActivate:[AuthGuard],component:ShooterComponent},
  {path:'games/Categories/open-world',canActivate:[AuthGuard],component:OpenWorldComponent},
  {path:'games/Categories/zombie',canActivate:[AuthGuard],component:ZombieComponent},
  {path:'games/Categories/fantasy',canActivate:[AuthGuard],component:FantasyComponent},
  {path:'games/Categories/action-rpg',canActivate:[AuthGuard],component:ActionRpgComponent},
  {path:'games/Categories/action',canActivate:[AuthGuard],component:ActionComponent},
  {path:'games/Categories/flight',canActivate:[AuthGuard],component:FlightComponent},
  {path:'games/Categories/battle-royale',canActivate:[AuthGuard],component:BattleRoyaleComponent},
  {path:'gameDetails/:id',canActivate:[AuthGuard],component:GameDetailComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
