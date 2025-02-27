import { Directive } from '@angular/core';
@Directive({
  selector: 'a[appSafeLink]', // use as attribute and apply it to Anchor tag
  standalone: true,
})
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective constructor called');
    }

}