import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { LogOutComponent } from './Components/log-out/log-out.component';
import { JoinFreeComponent } from './Components/join-free/join-free.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComponent } from './Components/all/all.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { PcComponent } from './Components/Platforms/pc/pc.component';
import { BrowserComponent } from './Components/Platforms/browser/browser.component';
import { ReleaseDateComponent } from './Components/Sortby/release-date/release-date.component';
import { PopularityComponent } from './Components/Sortby/popularity/popularity.component';
import { AlphabticalComponent } from './Components/Sortby/alphabtical/alphabtical.component';
import { RelevanceComponent } from './Components/Sortby/relevance/relevance.component';
import { RacingComponent } from './Components/Categories/racing/racing.component';
import { SportsComponent } from './Components/Categories/sports/sports.component';
import { SocialComponent } from './Components/Categories/social/social.component';
import { ShooterComponent } from './Components/Categories/shooter/shooter.component';
import { OpenWorldComponent } from './Components/Categories/open-world/open-world.component';
import { ZombieComponent } from './Components/Categories/zombie/zombie.component';
import { FantasyComponent } from './Components/Categories/fantasy/fantasy.component';
import { ActionRpgComponent } from './Components/Categories/action-rpg/action-rpg.component';
import { ActionComponent } from './Components/Categories/action/action.component';
import { FlightComponent } from './Components/Categories/flight/flight.component';
import { BattleRoyaleComponent } from './Components/Categories/battle-royale/battle-royale.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogOutComponent,
    JoinFreeComponent,
    HomeComponent,
    AllComponent,
    NavbarComponent,
    NotFoundComponent,
    GameDetailComponent,
    PcComponent,
    BrowserComponent,
    ReleaseDateComponent,
    PopularityComponent,
    AlphabticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    FlightComponent,
    BattleRoyaleComponent,
    SpinnerComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
