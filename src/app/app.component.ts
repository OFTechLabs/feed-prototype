import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => (result.matches as boolean))
        );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        if (Notification) {
            if ((Notification as any).permission === 'granted') {
                setTimeout(() => new Notification('Q2 Reporting', {body: 'Reports of Q2 have been finished and handed in.'}), 60000);
            } else {
                (Notification as any).requestPermission().then(status => {
                    if (status === 'granted') {
                        setTimeout(() => new Notification('Q2 Reporting', {body: 'Reports of Q2 have been finished and handed in.'}), 60000);
                    }
                });
            }
        }
    }

    public isOnFeed(): boolean {
        return this.route.snapshot['_routerState'].url === '/feed';
    }
}
