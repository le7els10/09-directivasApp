import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrMsgDirective implements OnInit, OnChanges {
  element: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this.element.nativeElement.style.color = valor;
  }
  @Input() mensaje: string = '';

  constructor(private el: ElementRef<HTMLElement>) {
    this.element = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setMessage();
  }

  ngOnInit(): void {
    this.setMessage();
  }

  setColor = () => {
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.classList.add('form-text');
  };

  setMessage = () => {
    this.element.nativeElement.textContent = this.mensaje;
  };
}
