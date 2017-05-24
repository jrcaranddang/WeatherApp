import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login-page/login-page';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { RegisterPage } from '../pages/register-page/register-page';
import { AccountSettingsPage } from '../pages/account-settings-page/account-settings-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WWUserRest } from '../providers/ww-user-rest';
import { CityRest } from '../providers/city-rest';

let injections = [
    MyApp,
    LoginPage,
    LobbyPage,
    RegisterPage,
    AccountSettingsPage
];

@NgModule({
  declarations: [injections],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [injections],
  providers: [
    StatusBar,
    SplashScreen,
    WWUserRest,
    CityRest,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
