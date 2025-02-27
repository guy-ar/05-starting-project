import { Directive } from '@angular/core';
@Directive({
  selector: 'a[appSafeLink]', // use as attribute and apply it to Anchor tag
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)' // host is used to add attributes or events to the host that holds the directive
  }
})
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective constructor called');
    }
    onConfirmLeavePage(event: MouseEvent) {
        console.log('SafeLinkDirective onConfirmLeavePage called');
        const isWantToLeave = confirm('Are you sure you want to leave?');
        if (isWantToLeave) {
          return
        } else {
          event.preventDefault(); // prevent the default action of the event
        }
    }

}