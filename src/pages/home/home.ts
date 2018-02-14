import { Component, ViewChild } from '@angular/core';
import { IonicPage, MenuController, Slides, NavController } from 'ionic-angular';
import { TrackProvider } from '../../providers/track/track';
import { TrackInterface } from '../../interfaces/track';
import { TabsPage } from '../../../.tmp/src/pages/tabs-page/tabs-page';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  showSkip = true;
  topTracks : TrackInterface[];

	@ViewChild('slides') slides: Slides;

  constructor(
    private menu: MenuController,
    private provider : TrackProvider,
    private navCtrl: NavController,
    private storage: Storage
  ){ 
  }

  ionViewDidLoad(){
    return this.provider.getTracks().subscribe(res =>{
      this.topTracks = res;
    });
  }
  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

	ionViewWillEnter() {
		this.slides.update();
	}

  //ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
  //  this.menu.enable(false);
  //}
  //ionViewWillLeave(){
    //this.storage.set('HAS_SEEN_HOME_PAGE', 'true');
  //}

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
