export class Disc {
    image: string;
    title: string;
    artist: string;
    genre: string;
    titles: Array<string>;
    year: number;

    constructor(image: string = null, title: string= null, artist: string= null, genre: string= null, titles: Array<string>= null, year: number= null) {
        this.image=image;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.titles = titles;
        this.year = year;
    }
}