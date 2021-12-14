import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCdPage } from './add-cd.page';

const routes: Routes = [
  {
    path: '',
    component: AddCdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCdPageRoutingModule {}
