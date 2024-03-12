import { Directive, Input, OnChanges, OnInit, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = true;
  @Input() myTempRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>, 
    private viewContrainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('onChanges', this.appMyStructural);
    console.log('myTempRef', this.myTempRef);
    console.log('templateRef', this.templateRef);

    const template = this.templateRef || this.myTempRef

    if (this.appMyStructural) {
      this.viewContrainer.createEmbeddedView(template,
        // context
        {
          myCustomValue: 'This is my custom message!',
          myNum: 123,
          $implicit: 'Default value'
        });
    } else {
      this.viewContrainer.clear();
    }
  }
}
