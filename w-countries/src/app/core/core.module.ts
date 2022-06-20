import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import { LoaderComponent } from './compomemts/loader/loader.component';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,  
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    ...materialModules,
  ]
})
export class CoreModule { }
