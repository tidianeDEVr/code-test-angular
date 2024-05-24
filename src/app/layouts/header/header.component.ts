import { Component, WritableSignal, inject } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { FOOTBALLER } from '../../utils/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private service = inject(MyServiceService);
  public footballers !: WritableSignal<FOOTBALLER[]>;
  public selectedFootballer : string = 'null' ;

  constructor() {
    this.footballers = this.service.getFootballers();    
  }

  changeFootballer($event: Event) {
    this.service.setSelectedFootballer(this.selectedFootballer)
  }
}
