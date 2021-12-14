import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Disc } from './../../model/disc';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() tri: string;
  @Input() list: Array<Disc> = [];
  @Output() triChange : EventEmitter<Array<Disc>> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (this.tri == "desc"){
      this.list.sort((a,b) => b.title.localeCompare(a.title));
    }
    else{
      this.list.sort((a,b) => a.title.localeCompare(b.title));
    }
    this.triChange.emit(this.list);
  }

}
