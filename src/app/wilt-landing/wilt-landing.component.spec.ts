import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltLandingComponent } from './wilt-landing.component';

describe('WiltLandingComponent', () => {
  let component: WiltLandingComponent;
  let fixture: ComponentFixture<WiltLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
