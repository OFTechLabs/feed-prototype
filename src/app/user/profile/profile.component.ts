import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppModel } from '../../AppModel';
import { AVMAppModelFactory } from '../../AVMAppModelFactory';
import { AssetmanagementAppModelFactory } from '../../AssetmanagementAppModelFactory';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    @Input()
    public model: AppModel;

    @Output()
    public modelChange: EventEmitter<AppModel> = new EventEmitter<AppModel>();

    constructor() {
    }

    ngOnInit() {
    }

    public avmRole(): void {
        this.adjustToRoles(['Taxationmanager']);
    }

    public amRole(): void {
        this.adjustToRoles(['Assetmanager']);
    }

    public allRoles(): void {
        this.adjustToRoles(['Assetmanager', 'Taxationmanager']);
    }

    private adjustToRoles(roleNames: string[]) {
        this.model = AssetmanagementAppModelFactory.create();
        this.model.moduleData = AVMAppModelFactory.create();
        this.model.user.roles = roleNames;
        this.modelChange.emit(this.model);
    }

    public getUserRoleName() {
        if (this.model.user.roles.length > 1) {
            return 'OF Consultant';
        } else if (this.model.user.roles[0] === 'Taxationmanager') {
            return 'AVM User';
        } else if (this.model.user.roles[0] === 'Assetmanager') {
            return 'AM User';
        }
    }

}
