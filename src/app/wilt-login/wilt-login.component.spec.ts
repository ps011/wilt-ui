import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltLoginComponent } from './wilt-login.component';

describe('WiltLoginComponent', () => {
  let component: WiltLoginComponent;
  let fixture: ComponentFixture<WiltLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
