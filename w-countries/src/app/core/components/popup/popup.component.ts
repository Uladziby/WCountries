import { aboutMe } from './../../../shared/interfaces/mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public data = aboutMe;

  constructor() { }

  ngOnInit(): void {
    
  }

}
