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
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { FeedComponent } from './feed/feed.component';
import { CardDirective } from './feed/card/card.directive';
import { ComplexesAnalyzedComponent } from './feed/card/assetmanagementcards/complexesanalyzedcard/complexes-analyzed.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        CardDirective,
        ComplexesAnalyzedComponent
    ],
    entryComponents: [ComplexesAnalyzedComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
