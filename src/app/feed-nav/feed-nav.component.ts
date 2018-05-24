import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'feed-nav',
    templateUrl: './feed-nav.component.html',
    styleUrls: ['./feed-nav.component.css']
})
export class FeedNavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => (result.matches as boolean))
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

}
