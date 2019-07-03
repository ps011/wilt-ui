import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiltPageNotFoundComponent } from './wilt-page-not-found.component';

describe('WiltPageNotFoundComponent', () => {
  let component: WiltPageNotFoundComponent;
  let fixture: ComponentFixture<WiltPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiltPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiltPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
