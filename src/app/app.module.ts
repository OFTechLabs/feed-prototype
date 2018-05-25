import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {FeedComponent} from './feed/feed.component';
import {CardDirective} from './feed/card/card.directive';
import {ComplexesAnalyzedComponent} from './feed/card/assetmanagementcards/complexesanalyzedcard/complexes-analyzed.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WhatsNewComponent} from './feed/card/assetmanagementcards/whatsnew/whats-new.component';
import {ProgressCardComponent} from './feed/card/assetmanagementcards/progress-card/progress-card.component';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {PieChartComponent} from './feed/card/assetmanagementcards/graphcards/piecharts/piechart.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from './feed/card/assetmanagementcards/graphcards/linechart/linechart.component';
import {BarChartComponent} from './feed/card/assetmanagementcards/graphcards/barchart/barchart.component';
import {DoughnutChartComponent} from './feed/card/assetmanagementcards/graphcards/doughnutchart/doughnutchart.component';
import {RadarChartComponent} from './feed/card/assetmanagementcards/graphcards/radarchart/radarchart.component';
import {PolarChartComponent} from './feed/card/assetmanagementcards/graphcards/polarchart/polarchart.component';
import {ReminderComponent} from './feed/card/assetmanagementcards/reminder/reminder.component';
import {ThisQuarterComponent} from './feed/card/assetmanagementcards/planning/this-quarter.component';
import {NewsCardComponent} from './feed/card/assetmanagementcards/news-card/news-card.component';

const MATERIAL_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule
];

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        CardDirective,
        ComplexesAnalyzedComponent,
        WhatsNewComponent,
        PieChartComponent,
        LineChartComponent,
        BarChartComponent,
        DoughnutChartComponent,
        RadarChartComponent,
        PolarChartComponent,
        ProgressCardComponent,
        NewsCardComponent,
        ReminderComponent,
        ThisQuarterComponent,
    ],
    entryComponents: [
        ComplexesAnalyzedComponent,
        WhatsNewComponent,
        ProgressCardComponent,
        PieChartComponent,
        LineChartComponent,
        BarChartComponent,
        DoughnutChartComponent,
        RadarChartComponent,
        PolarChartComponent,
        NewsCardComponent,
        ReminderComponent,
        ThisQuarterComponent,
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register(environment.serviceWorkerLocation, {enabled: environment.production}),
        BrowserAnimationsModule,
        LayoutModule,
        MATERIAL_MODULES,
        FlexLayoutModule,
        Ng2GoogleChartsModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
