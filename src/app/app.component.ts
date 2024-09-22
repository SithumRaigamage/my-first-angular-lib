import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularLibComponent } from "../../projects/angular-lib/src/lib/angular-lib.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-angular-lib';
}
