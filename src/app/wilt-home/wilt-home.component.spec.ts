import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltHomeComponent } from './wilt-home.component';

describe('WiltHomeComponent', () => {
  let component: WiltHomeComponent;
  let fixture: ComponentFixture<WiltHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
