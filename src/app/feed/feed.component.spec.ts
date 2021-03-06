import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {FeedComponent} from './feed.component';

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FeedComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
