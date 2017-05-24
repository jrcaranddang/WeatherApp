import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby-page';

@NgModule({
  declarations: [
    LobbyPage,
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
  exports: [
    LobbyPage
  ]
})
export class LobbyPageModule {}
