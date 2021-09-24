import {Component, OnInit} from '@angular/core';
import {Music} from '../../../models/music.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styleUrls: ['./playlists-page.component.css']
})
export class PlaylistsPageComponent implements OnInit {
  playlistsNames: string[];
  playlists: { title: string, content: Music[] }[] = [];
  musics: Music[];
  selectedPlaylistTile: string;

  constructor() {
  }

  ngOnInit(): void {
    this.getAllPlaylists();
  }

  viewPlaylist(playlistName: string): void {
    this.playlists.forEach(playlist => {
      if (playlist.title === playlistName) {
        this.musics = playlist.content;
        this.selectedPlaylistTile = playlistName;
      }
    });
  }

  deletePlaylist(playlistName: string): void {
    localStorage.setItem('playlist - ' + playlistName, null);
    const newPlaylistName: string[] = [];
    this.playlistsNames.forEach(name => {
      if (name !== playlistName) {
        newPlaylistName.push(name);
      }
    });
    this.playlistsNames = newPlaylistName;
    localStorage.setItem('playlistsNames', JSON.stringify(this.playlistsNames));
    this.getAllPlaylists();
    window.location.reload();
  }

  getAllPlaylists(): void {
    this.playlistsNames = JSON.parse(localStorage.getItem('playlistsNames'));
    this.playlistsNames.forEach(name => {
      console.log(localStorage.getItem('playlist - ' + name));
      this.playlists.push({title: name, content: JSON.parse(localStorage.getItem('playlist - ' + name))});
    });
    console.log(this.playlists);
  }
}
