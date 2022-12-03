
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DarkModeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    HeaderComponent,
    DarkModeComponent,
  ]
})
export class SharedModule { }
