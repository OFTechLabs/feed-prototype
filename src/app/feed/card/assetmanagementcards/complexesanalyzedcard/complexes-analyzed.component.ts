import {Component, Input} from '@angular/core';
import {CardComponent} from '../../CardComponent';

@Component({
    template: `
        <mat-card class="dashboard-card">
            <mat-card-header>
                <mat-card-title>
                    Analyzed Complexes
                    <button mat-icon-button class="more-button" [matMenuTriggerFor]="menu" aria-label="Toggle menu">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                    <mat-menu #menu="matMenu" xPosition="before">
                        <button mat-menu-item>Expand</button>
                        <button mat-menu-item>Remove</button>
                    </mat-menu>
                </mat-card-title>
            </mat-card-header>
            <mat-card-content class="dashboard-card-content">
                <div>{{data.analyzedComplexes}} / {{data.totalComplexes}}</div>
            </mat-card-content>
        </mat-card>
  `
})
export class ComplexesAnalyzedComponent implements CardComponent {
    @Input() data: any;

}

