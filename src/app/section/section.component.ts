import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() backgroundColor: string = '#f5f5f5';
}
