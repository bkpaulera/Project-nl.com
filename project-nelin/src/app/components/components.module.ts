import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';

import { ParallaxComponent } from './parallax/parallax.component';
import { CardsComponent } from './cards/cards.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    NavbarComponent,
    ParallaxComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    ParallaxComponent,
    CardsComponent
  ],
})
export class ComponentsModule { }
