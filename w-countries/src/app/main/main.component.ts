import { ContinentsService } from './../shared/services/continents.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public arrOfRegions!:String[];
  constructor(private continents : ContinentsService,  private router: Router, ) { }

  ngOnInit(): void {
    this.arrOfRegions = this.continents.listOfContinents;
  }

  fetchListCountries(event :Event){
    const element = event.target as HTMLElement
    console.log(element.textContent)
    //dispatch countries to the store
    this.router.navigate([`/${element.textContent}`])
  }
}
