import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppModel } from '../../AppModel';
import { AppModelFactory } from '../../AppModelFactory';
import { AssetmanagementAppModelFactory } from '../../AssetmanagementAppModelFactory';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Select, Store } from '@ngxs/store';
import { ChangeUser } from '../../app.action';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    @Select(AppState) model$: Observable<AppModel>;

    @Input()
    public model: AppModel;

    @Output()
    public modelChange: EventEmitter<AppModel> = new EventEmitter<AppModel>();

    constructor(private store: Store) {
    }

    ngOnInit() {
    }

    public avmRole(): void {
        this.changeUser(['Taxationmanager']);
    }

    public amRole(): void {
        this.changeUser(['Assetmanager']);
    }

    public allRoles(): void {
        this.changeUser(['Assetmanager', 'Taxationmanager']);
    }

    private changeUser(roleNames: string[]) {
        this.store.dispatch(new ChangeUser(roleNames));
    }

    public getUserRoleName(roleNames: string[]) {
        if (roleNames.length > 1) {
            return 'OF Consultant';
        } else if (roleNames[0] === 'Taxationmanager') {
            return 'AVM User';
        } else if (roleNames[0] === 'Assetmanager') {
            return 'AM User';
        }

        return 'Hacker';
    }

}
