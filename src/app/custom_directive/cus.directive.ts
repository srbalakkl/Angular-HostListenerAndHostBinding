import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appCus]',
    standalone: false
})
export class CusDirective {

  /**
   * @HostListener is used To listen/subscribe DOM events on directory or components
   *
   * @HostBinding binds a Host element property to a variable in the directive or component
   * */

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostBinding('style.font-weight') weight!: string;
  @HostBinding('class') class!: string;
  // @HostBinding('class')  get class() {  return "highlight box"  } <- Alternative method.

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.weight = "bolder";
    this.class = "css_class";
  }
}
