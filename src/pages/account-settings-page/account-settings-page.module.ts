import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsPage } from './account-settings-page';

@NgModule({
  declarations: [
    AccountSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsPage),
  ],
  exports: [
    AccountSettingsPage
  ]
})
export class AccountSettingsPageModule {}
