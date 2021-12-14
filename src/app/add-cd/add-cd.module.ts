import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCdPageRoutingModule } from './add-cd-routing.module';

import { AddCdPage } from './add-cd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCdPageRoutingModule
  ],
  declarations: [AddCdPage]
})
export class AddCdPageModule {}
