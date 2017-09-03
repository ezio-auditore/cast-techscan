import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RepoListComponent} from './repo-list/repo-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { ProfileMiniNavComponent } from './profile-mini-nav/profile-mini-nav.component';

const routes :Routes = [
  {path : 'home', component:HomeComponent},
  {path : '',redirectTo : 'home' , pathMatch :'full'},
  {path : 'repo/:repoType', component:RepoListComponent},
  {path : 'users/:loginId', component :UserDetailsComponent},
  {path : 'users/:loginId/repos', component :ProfileMiniNavComponent}
];

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{}
export const routingComponents = [HomeComponent,RepoListComponent,UserDetailsComponent,ProfileMiniNavComponent]
