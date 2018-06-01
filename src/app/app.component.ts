import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
    }

    public isOnFeed(): boolean {
        return this.route.snapshot['_routerState'].url === '/feed';
    }
}
