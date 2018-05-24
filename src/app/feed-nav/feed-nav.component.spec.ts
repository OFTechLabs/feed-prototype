
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavComponent } from './feed-nav.component';

describe('FeedNavComponent', () => {
  let component: FeedNavComponent;
  let fixture: ComponentFixture<FeedNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
