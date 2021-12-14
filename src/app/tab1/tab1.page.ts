import { Component } from '@angular/core';
import { Disc } from './../../model/disc';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  disc
  disc2
  disc3
  disc4
  disc5
  disc6
  discs: Array<Disc> = [];
  constructor() {

    let mesMusiques: string[] = ['Coucou', 'My World', 'Elle te balade', 'Cest chaud'];   
    this.disc = new Disc("../assets/myworld.jpg", "My World", "Jul", "rap", mesMusiques, 2016);

    let mesMusiques2: string[] = ['Heartbreak Weather', 'Black & White', 'Dear Patience', 'Bend The Rules'];   
    this.disc2 = new Disc("../assets/heart.jpg", "Heartbreak Weather", "Niall Horan", "pop", mesMusiques2, 2020);

    let mesMusiques3: string[] = ['Au DD', 'Autre monde', 'Chang', 'Blanka'];   
    this.disc3 = new Disc("../assets/pnl.jpeg", "Deux frères", "PNL", "rap", mesMusiques3, 2019);

    let mesMusiques4: string[] = ['Louis V', 'Cruel', 'Ysl', 'Elvira'];   
    this.disc4 = new Disc("../assets/No-Crari.jpg", "No crari", "OBOY", "rap", mesMusiques4, 2021);

    let mesMusiques5: string[] = ['Périscope', 'Débrouillard', 'Exutoire', 'Quotien du baisé'];   
    this.disc5 = new Disc("../assets/damso.jpg", "Batterie faible", "DAMSO", "rap", mesMusiques5, 2016);

    let mesMusiques6: string[] = ['Kira', 'Trou de boulette', 'Me gusta', "J'hésite"];   
    this.disc6 = new Disc("../assets/dtf.png", "On ira où ?", "DTF", "rap", mesMusiques6, 2019);

    this.discs.push(this.disc);
    this.discs.push(this.disc2);
    this.discs.push(this.disc3);
    this.discs.push(this.disc4);
    this.discs.push(this.disc5);
    this.discs.push(this.disc6);
  }
}
