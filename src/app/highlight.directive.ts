import { Directive } from '@angular/core';
import { BaseConfigService } from './base-config.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private base:BaseConfigService) {
let url=base.url
console.log(url);
   }
}
