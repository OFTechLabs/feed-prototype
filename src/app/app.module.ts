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
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule
} from '@angular/material';
import { FeedComponent } from './feed/feed.component';
import { CardDirective } from './feed/card/card.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhatsNewComponent } from './feed/card/assetmanagementcards/whatsnew/whats-new.component';
import { ProgressCardComponent } from './feed/card/assetmanagementcards/progress-card/progress-card.component';
import { ChartsModule } from 'ng2-charts';
import { ReminderComponent } from './feed/card/assetmanagementcards/reminder/reminder.component';
import { ArrayChartComponent } from './feed/card/assetmanagementcards/graphcards/arraycharts/arraychart.component';
import { ThisQuarterComponent } from './feed/card/assetmanagementcards/planning/this-quarter.component';
import { NewsCardComponent } from './feed/card/assetmanagementcards/news-card/news-card.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UpdateComponent } from './feed/card/assetmanagementcards/update/update.component';
import { WarningComponent } from './feed/card/assetmanagementcards/warnings/warning.component';
import { FormsModule } from '@angular/forms';
import { CardsState } from './feed/card/CardsState';
import { I18nService } from './i18n/I18nService';
import { AssistantComponent } from './feed/card/assetmanagementcards/assistant/assistant.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app.state';
import { DemoComponent } from './demo/demo.component';

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
    MatInputModule,
    MatSlideToggleModule,
    MatDividerModule,
];

const appRoutes: Routes = [
    {path: 'feed', component: FeedComponent},
    {path: 'user-settings', component: UserSettingsComponent},
    {path: 'home', component: DemoComponent},
    {path: '**', redirectTo: 'feed', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        CardDirective,
        WhatsNewComponent,
        ProgressCardComponent,
        ReminderComponent,
        NewsCardComponent,
        ArrayChartComponent,
        ThisQuarterComponent,
        ProfileComponent,
        UpdateComponent,
        WarningComponent,
        AssistantComponent,
        UserSettingsComponent,
        DemoComponent
    ],
    entryComponents: [
        WhatsNewComponent,
        ProgressCardComponent,
        ReminderComponent,
        ArrayChartComponent,
        ReminderComponent,
        NewsCardComponent,
        ThisQuarterComponent,
        UpdateComponent,
        WarningComponent,
        AssistantComponent,
        DemoComponent,
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register(environment.serviceWorkerLocation, {enabled: environment.production}),
        BrowserAnimationsModule,
        LayoutModule,
        MATERIAL_MODULES,
        FlexLayoutModule,
        ChartsModule,
        FormsModule,
        NgxsModule.forRoot([
            AppState,
        ]),
        RouterModule.forRoot(appRoutes),
    ],
    providers: [
        CardsState,
        I18nService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
