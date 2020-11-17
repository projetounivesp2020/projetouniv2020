import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcoesPageRoutingModule } from './acoes-routing.module';

import { AcoesPage } from './acoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcoesPageRoutingModule
  ],
  declarations: [AcoesPage]
})
export class AcoesPageModule {}
