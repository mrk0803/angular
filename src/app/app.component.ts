import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rajkumar Angular';
  root ='../assets/groot.jpg';
  test=false;

  show(){
    alert('Pop up message');
  }
}
