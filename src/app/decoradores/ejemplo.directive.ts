import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEjemplo]'
})
export class EjemploDirective {

  constructor(private temp: ElementRef) {
  }

  @HostListener('mouseenter') onMouseenter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.temp.nativeElement.style.backgroundColor = color;
  }

}
