import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7Component } from './page7.component';

describe('Page7Component', () => {
  let component: Page7Component;
  let fixture: ComponentFixture<Page7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
