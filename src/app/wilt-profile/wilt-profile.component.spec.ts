import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltProfileComponent } from './wilt-profile.component';

describe('WiltProfileComponent', () => {
  let component: WiltProfileComponent;
  let fixture: ComponentFixture<WiltProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
