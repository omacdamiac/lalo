import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
