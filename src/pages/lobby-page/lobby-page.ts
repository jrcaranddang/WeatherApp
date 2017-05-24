import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lobby-page',
  templateUrl: 'lobby-page.html',
})
export class LobbyPage {
  public low: any;
  public lowF: any;
  public lowC: any;
  public high: any;
  public highF: any;
  public highC: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menu: MenuController,
    public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    this.menu.swipeEnable(true, 'menu1');
  }

  showToast() {
    let toast = this.toastController.create({
      message: 'Saved to favorites!',
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }

  degrees(deg) {
    console.log("degrees changed")
    console.log(deg)
    
    if (deg.checked === true) {
      this.low = this.lowF;
      this.high = this.highF;
    }
    else if (deg.checked === false) {
      this.low = this.lowC;
      this.high = this.highC;
    }
  }
}
