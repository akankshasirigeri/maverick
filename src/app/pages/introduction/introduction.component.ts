import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {}
