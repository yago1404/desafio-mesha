import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicService} from '../../../services/music/music.service';
import {Music} from '../../../models/music.model';

@Component({
  selector: 'app-weather-playlist',
  templateUrl: './weather-playlist.component.html',
  styleUrls: ['./weather-playlist.component.css']
})
export class WeatherPlaylistComponent implements OnInit {
  temp: number;
  idealPlaylistType: string;
  musics: Music[] = [];
  playlistName: string;
  isValid = true;

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) {
  }

  ngOnInit(): void {
    this.temp = parseFloat(this.activatedRoute.snapshot.paramMap.get('temp'));
    if (this.temp > 32) {
      this.idealPlaylistType = 'Rock';
    } else if (this.temp < 32 && this.temp > 24) {
      this.idealPlaylistType = 'Pop';
    } else if (this.temp < 24 && this.temp > 16) {
      this.idealPlaylistType = 'Classica';
    } else {
      this.idealPlaylistType = 'Lofi';
    }
    this.musicService.getPlaylist(this.idealPlaylistType).subscribe(response => {
      response.tracks.hits.forEach(hit => {
        console.log(hit);
        let artistInfo: string;
        if (!hit.track.artists) {
          artistInfo = 'Sem informações';
        } else {
          artistInfo = hit.track.artists[0].id.toString();
        }
        const city = this.activatedRoute.snapshot.paramMap.get('city');
        const newMusic = new Music(artistInfo, hit.track.title, hit.track.images.coverart, this.temp, Date(), this.idealPlaylistType, city);
        this.musics.push(newMusic);
      });
    });
  }

  savePlaylist(): void {
    if (!this.playlistName) {
      this.isValid = false;
      return;
    }
    const saveString = JSON.stringify(this.musics);
    localStorage.setItem('playlist - ' + this.playlistName, saveString);


    let playlistsNames = JSON.parse(localStorage.getItem('playlistsNames'));
    if (playlistsNames === null) {
      console.log('init playlistsNames');
      playlistsNames = [];
    }
    playlistsNames.push(this.playlistName);
    localStorage.setItem('playlistsNames', JSON.stringify(playlistsNames));
    console.log(localStorage.getItem('playlistsNames'));
    alert('playlist salva co sucesso');
  }
}
