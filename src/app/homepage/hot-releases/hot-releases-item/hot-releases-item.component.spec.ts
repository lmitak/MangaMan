import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotReleasesItemComponent } from './hot-releases-item.component';

describe('HotReleasesItemComponent', () => {
  let component: HotReleasesItemComponent;
  let fixture: ComponentFixture<HotReleasesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotReleasesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotReleasesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
