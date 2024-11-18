import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { WelcomeComponent } from "../../components/welcome/welcome.component";
import { SlidingPanelComponent } from "../../components/sliding-panel/sliding-panel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, WelcomeComponent, SlidingPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
