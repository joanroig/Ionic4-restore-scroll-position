import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Content } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  @ViewChild(Content) content: Content;

  private selectedItem: any;
  private icons = [
    'flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'
  ];

  public items: Array<{ title: string; note: string; icon: string }> = [];

  scrollPosition = 0;

  constructor(public navCtrl: NavController,
    private router: Router) {

    for (let i = 1; i < 200; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Restore scroll position
    this.content.scrollToPoint(0, this.scrollPosition);
  }

  showDetail() {

    // Save scroll position
    this.content.getScrollElement().then(data => {
      console.log(data.scrollTop);
      this.scrollPosition = data.scrollTop;
    });

    // this.router.navigateByUrl('/detail');
    this.navCtrl.navigateForward('/detail');
  }
}
