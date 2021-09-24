import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './views/pages/home-page/home-page.component';
import {PlaylistsPageComponent} from './views/pages/playlists-page/playlists-page.component';
import {WeatherPlaylistComponent} from './views/pages/weather-playlist/weather-playlist.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'playlists', component: PlaylistsPageComponent },
  { path: 'playlist/:city/:temp', component: WeatherPlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
