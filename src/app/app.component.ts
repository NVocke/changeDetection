import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mainStatus = { changed: false };

  constructor() {
    setTimeout(() => {
      this.mainStatus = { changed: true };
    }, 2000);
  }
}
