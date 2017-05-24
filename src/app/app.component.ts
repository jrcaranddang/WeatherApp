import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login-page/login-page';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { AccountSettingsPage } from '../pages/account-settings-page/account-settings-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  cities: Array<{}>;
  cardList: any;
  isOpen: Boolean;
  constructor(
    public platform: Platform, 
    public menu: MenuController,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lobby', component: LobbyPage },
      { title: 'Account Settings', component: AccountSettingsPage }
    ];
    this.isOpen = false;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  logout() {
    // this.restWWUser.logout(window.localStorage.getItem('token'))
    // .map(res => res.json())
    // .subscribe(res => {
    //   window.localStorage.clear();
      this.nav.setRoot(LoginPage);
    // }, err => {
    //   //because this is logging the user out, we don't need to worry about this here.
    //   // alert("Something went really wrong.");
    //   window.localStorage.clear();
    //   this.nav.setRoot(LoginPage);
    // });
  }

  // getCardList() {
  //   this.cardService.getCardList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
  //     .map(res => res.json())
  //       .subscribe(res => {
  //         this.cardList = res || [];
  //         console.log("cardList")
  //         console.log(this.cardList)
  //         return this.cardList
  //       }, err => {
  //         console.log(err.statusText);
  //         this.cardList = [];
  //       });
  // }

  // deleteCity(cardId, index) {
  //   console.log("city deleted")
  //   console.log(cardId)
  //   this.cardService.deleteCard(cardId)
  //   this.cardList.splice(index, 1)
  // }
  
  // goToCity(card) {
  //   console.log("display favorite city")
  //   console.log(card)
  //   this.menu.close()
  //   this.nav.setRoot(LobbyPage, {
  //     'card': card
  //   })
  // }

  openSavedCities() {
    // this.getCardList()
    this.isOpen = !this.isOpen
  }

  menuClose() {
    this.isOpen = false
  }
}
