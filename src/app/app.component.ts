import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ejs-listview id='sample-list' [dataSource]='data'></ejs-listview>`
})
export class AppComponent {
  title = 'angular11ListView-app';
  public data: Object = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];
}
