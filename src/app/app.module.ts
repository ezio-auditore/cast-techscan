import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LanguagesSideComponent } from './languages-side/languages-side.component';
import { HomeComponent } from './home/home.component';
import {RepoListComponent} from './repo-list/repo-list.component';
import {RepoService} from './services/repo.service';
import { RepoComponent } from './repo/repo.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UsersService} from './services/users.service';
import { ProfileMiniNavComponent } from './profile-mini-nav/profile-mini-nav.component';
import {UserProfileService} from './services/user-profile.service';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './profile-following/profile-following.component';
@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    CardListComponent,
    LanguagesSideComponent,
    routingComponents,
    RepoComponent,
    UserDetailsComponent,
    ProfileMiniNavComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [RepoService,UsersService,UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
