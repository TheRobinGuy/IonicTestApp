import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city : string;
  state : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.city = "Orlando";
    this.state = "FL";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
