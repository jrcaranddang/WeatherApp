import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';
import { RegisterPage } from '../register-page/register-page';
import { WWUserRest } from '../../providers/ww-user-rest';

@IonicPage()
@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  user = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menu: MenuController,
    private wwUserRest: WWUserRest  ) {
      window.localStorage.clear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    this.menu.enable(false);
    this.menu.swipeEnable(false, 'menu1')
  }

  ionViewDidLeave() {
    this.menu.enable(true)
  }
  signinForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.wwUserRest.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
        if (res.status === 422) {
          console.log(res)
          alert("Email is already taken")
        }
    }, err => {
      console.log(err);
        if (err.status === 401) {
          console.log(err)
          alert(err.statusText)
        }
    });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
