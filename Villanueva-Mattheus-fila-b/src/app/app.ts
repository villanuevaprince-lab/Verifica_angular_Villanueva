import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second-component/second-component';
import { FourthComponent } from './fourth-component/fourth-component';
import { ThirdComponent } from './third-component/third-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Villanueva-Mattheus-fila-b');
  Mattheus = {
    app: 'app'
  }
}
