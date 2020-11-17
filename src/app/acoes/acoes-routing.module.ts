import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcoesPage } from './acoes.page';

const routes: Routes = [
  {
    path: '',
    component: AcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcoesPageRoutingModule {}
