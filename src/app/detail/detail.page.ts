import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    // this.navCtrl.navigateBack('/list');
    // this.router.navigateByUrl('/list');
    this.navCtrl.goBack();
  }
}
