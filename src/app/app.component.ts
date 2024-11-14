import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { WelcomeIntroComponent } from "./components/welcome-intro/welcome-intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, SidebarComponent, WelcomeComponent, WelcomeIntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tieopp_official';
}
