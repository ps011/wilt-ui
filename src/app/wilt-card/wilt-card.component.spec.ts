import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltCardComponent } from './wilt-card.component';

describe('WiltCardComponent', () => {
  let component: WiltCardComponent;
  let fixture: ComponentFixture<WiltCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
