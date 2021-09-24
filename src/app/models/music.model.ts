export class Music {
  artist: string;
  title: string;
  coverart: string;
  temp: number;
  date: string;
  type: string;
  city: string;

  constructor(artist: string, title: string, covarart: string, temp: number, date: string, type: string, city: string) {
    this.artist = artist;
    this.title = title;
    this.coverart = covarart;
    this.temp = temp;
    this.date = date;
    this.type = type;
    this.city = city;
  }
}
