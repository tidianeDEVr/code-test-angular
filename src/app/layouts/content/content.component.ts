import { Component, Signal, computed, inject } from '@angular/core';
import { FOOTBALLER } from '../../utils/interfaces';
import { MyServiceService } from '../../services/my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  private service = inject(MyServiceService);
  public footballer: Signal<FOOTBALLER | null>;
  
  constructor() {
    this.footballer =  computed(() => {
      return this.service.selectedFootballer();
    });
  }
}
