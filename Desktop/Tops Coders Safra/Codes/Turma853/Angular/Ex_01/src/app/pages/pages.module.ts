import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardItemComponent } from './rank-list/card-item/card-item.component';
import { RankListComponent } from './rank-list/rank-list.component';


@NgModule({
  declarations: [
    CardItemComponent,
    RankListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardItemComponent,
    RankListComponent
  ]
})
export class PagesModule { }
