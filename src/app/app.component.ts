import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
  
  
  onKeyUp(eve : Event){
    console.log((eve.target as HTMLInputElement).value)
  }
}
