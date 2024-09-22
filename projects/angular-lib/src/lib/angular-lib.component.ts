import { Component } from '@angular/core';

@Component({
  selector: 'lib-angular-lib',
  standalone: true,
  imports: [],
  templateUrl:"./lib.component.html",
  styleUrls:["./lib.component.scss"]
})
export class AngularLibComponent {
  message: string = 'Hello, World!'

}
