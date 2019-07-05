import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltNavComponent } from './wilt-nav.component';

describe('WiltNavComponent', () => {
  let component: WiltNavComponent;
  let fixture: ComponentFixture<WiltNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
