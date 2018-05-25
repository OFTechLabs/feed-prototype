import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AssetmanagementAppModelFactory } from './AssetmanagementAppModelFactory';
import { AppModel } from './AppModel';
import { AppModelFactory } from './AppModelFactory';

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
    public model: AppModel;

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    ngOnInit(): void {
        this.model = AssetmanagementAppModelFactory.create();
        this.model.moduleData = AppModelFactory.create();
    }
}
