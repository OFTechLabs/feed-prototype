import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatBadgeModule,
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
import { FeedComponent } from './feed/feed.component';
import { CardDirective } from './feed/card/card.directive';
import { ComplexesAnalyzedComponent } from './feed/card/assetmanagementcards/complexesanalyzedcard/complexes-analyzed.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhatsNewComponent } from './feed/card/assetmanagementcards/whatsnew/whats-new.component';
import { ProgressCardComponent } from './feed/card/assetmanagementcards/progress-card/progress-card.component';
import { ChartsModule } from 'ng2-charts';
import { ReminderComponent } from './feed/card/assetmanagementcards/reminder/reminder.component';
import { ArrayChartComponent } from './feed/card/assetmanagementcards/graphcards/arraycharts/arraychart.component';
import { ThisQuarterComponent } from './feed/card/assetmanagementcards/planning/this-quarter.component';
import { NewsCardComponent } from './feed/card/assetmanagementcards/news-card/news-card.component';
import { ProfileComponent } from './user/profile/profile.component';
import {UpdateComponent} from './feed/card/assetmanagementcards/update/update.component';

const MATERIAL_MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatBadgeModule,
];

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        CardDirective,
        ComplexesAnalyzedComponent,
        WhatsNewComponent,
        ProgressCardComponent,
        ReminderComponent,
        NewsCardComponent,
        ArrayChartComponent,
        ThisQuarterComponent,
        ProfileComponent,
        UpdateComponent,
    ],
    entryComponents: [
        ComplexesAnalyzedComponent,
        WhatsNewComponent,
        ProgressCardComponent,
        ReminderComponent,
        ArrayChartComponent,
        ReminderComponent,
        NewsCardComponent,
        ThisQuarterComponent,
        UpdateComponent,
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register(environment.serviceWorkerLocation, {enabled: environment.production}),
        BrowserAnimationsModule,
        LayoutModule,
        MATERIAL_MODULES,
        FlexLayoutModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
