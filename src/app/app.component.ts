import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SlidingPanelComponent } from './components/sliding-panel/sliding-panel.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    WelcomeComponent,
    SlidingPanelComponent,
    HomeComponent,
    IntroductionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tieopp_official';
}
