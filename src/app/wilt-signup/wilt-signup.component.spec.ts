import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltSignupComponent } from './wilt-signup.component';

describe('WiltSignupComponent', () => {
  let component: WiltSignupComponent;
  let fixture: ComponentFixture<WiltSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
