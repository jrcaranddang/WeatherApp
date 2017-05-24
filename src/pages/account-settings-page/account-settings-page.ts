import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LobbyPage } from '../lobby-page/lobby-page';
import { WWUserRest } from '../../providers/ww-user-rest';

@IonicPage()
@Component({
  selector: 'page-account-settings-page',
  templateUrl: 'account-settings-page.html',
})
export class AccountSettingsPage {
  user = {
    repeatNewPassword: "",
    password: "",
    newPassword:""
  };
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
    private wwUserRest: WWUserRest ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingsPage');
  }
  
  editForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    else if (this.user.newPassword === this.user.repeatNewPassword) {
    this.user.password = this.user.repeatNewPassword
    
      this.wwUserRest.edit(this.user, window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
        .map(res => res.json())
        .subscribe(res => {
          console.log(res);
          this.navCtrl.setRoot(LobbyPage);
        }, err => {
          console.log(err);
        });
    }
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
  
}
