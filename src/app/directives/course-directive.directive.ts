import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { ListType } from '../static-data';

@Directive({
  selector: '[appCourseDirective]'
})
export class CourseDirectiveDirective  implements OnChanges{
  @Input() list: ListType;
  constructor(el: ElementRef) {
    el.nativeElement.style.border = '1px solid green';
    
  }

  
  ngOnChanges(){
    console.log(`hello  ${this.list}`);
  }

}
