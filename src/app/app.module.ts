import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/pages/home-page/home-page.component';
import { HeaderComponent } from './views/components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PlaylistsPageComponent } from './views/pages/playlists-page/playlists-page.component';
import { WeatherPlaylistComponent } from './views/pages/weather-playlist/weather-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    PlaylistsPageComponent,
    WeatherPlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
