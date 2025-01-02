import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {
  @Input() contador: number = 0;
  @Output() cambio: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++;
    this.cambio.emit(this.contador);
  }

  decrementar() {
    this.contador--;
    this.cambio.emit(this.contador);
  }

}
