import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive POC';
  value = '';
  loader: string;

  setValue() {
    this.loader = this.value;
  }
}
