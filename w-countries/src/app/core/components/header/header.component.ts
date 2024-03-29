import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router : Router) { }

  openDialog() {
    this.dialog.open(PopupComponent);
  }
  ngOnInit(): void {
  }
  onHome(){
    this.router.navigate([''])
  }
}
