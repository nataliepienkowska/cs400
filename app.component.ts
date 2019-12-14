import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ps7';

  getValue(inputString): void {
    this.apiservice.getData(inputString)
      .subscribe(results => {
        this.results = results;
        console.log(`${this.results}`)
      });
  }
}
