import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliding-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sliding-panel.component.html',
  styleUrl: './sliding-panel.component.css',
})
export class SlidingPanelComponent {
  isOpen = false;

  togglePanel(): void {
    this.isOpen = !this.isOpen;
  }
}
