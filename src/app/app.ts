import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
