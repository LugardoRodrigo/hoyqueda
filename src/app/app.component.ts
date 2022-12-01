import { Component } from '@angular/core';
import LogRocket from 'logrocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autos';
}

LogRocket.init('cofxhd/monitoreo');

LogRocket.identify('cofxhd/monitoreo', {
  name: 'Rodrigo',
  email: 'rokazoorls@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});
