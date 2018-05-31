import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

    public categories: string[];

    constructor() {
    }

    ngOnInit() {
        this.categories = [
            'Updates',
            'Ortec Finance News',
            'Graphs',
            'Reminders',
            'Warnings',
            'What\'s new',
            'Planning',
        ];
    }

}
