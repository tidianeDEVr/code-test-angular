import { Injectable, WritableSignal, signal } from '@angular/core';
import { FOOTBALLER } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  footballers = signal([
    { name: "Messi", club: "Barcelona" },
    { name: "Ronaldo", club: "Juventus" },
    { name: "Neymar", club: "PSG" },
  ]);
  selectedFootballer = signal<FOOTBALLER | null>(null)

  constructor() { }

  getFootballers(): WritableSignal<FOOTBALLER[]> {
    return this.footballers;
  }

  setSelectedFootballer(footballerName: string): void {
    if(footballerName == 'null') return this.selectedFootballer.set(null);
    this.footballers().forEach((ftb) => {
      if( ftb.name == footballerName) this.selectedFootballer.set(ftb);
    })
  }

  getSelectedFootballer(){
    return this.selectedFootballer();
  }
}
