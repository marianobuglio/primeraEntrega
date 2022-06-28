import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinutasPage } from './minutas.page';

const routes: Routes = [
  {
    path: '',
    component: MinutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinutasPageRoutingModule {}
