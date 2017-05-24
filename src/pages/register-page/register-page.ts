import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';
import { WWUserRest } from '../../providers/ww-user-rest';

@IonicPage()
@Component({
  selector: 'page-register-page',
  templateUrl: 'register-page.html',
})
export class RegisterPage {
  user = {};
  passwordStrength = {
    "float": "right",
    "width": "100px",
    "height": "5px",
    "margin-left": "5px",
    "position": "relative",
    "top": "3px"
  };
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menu: MenuController,
    private wwUserRest: WWUserRest  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signupForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.wwUserRest.register(this.user)
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
        if (err.status === 422) {
          alert("Email is already taken")
        }
    });
  }

  analyze(value) {
    if(this.strongRegex.test(value)) {
      this.passwordStrength["background-color"] = "green";
    } else if (this.mediumRegex.test(value)) {
      this.passwordStrength["background-color"] = "orange";
    } else {
      this.passwordStrength["background-color"] = "red";
    }
  };

  logger(e) {
    console.log(e);
  }
}