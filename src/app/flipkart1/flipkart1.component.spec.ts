import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flipkart1Component } from './flipkart1.component';

describe('Flipkart1Component', () => {
  let component: Flipkart1Component;
  let fixture: ComponentFixture<Flipkart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flipkart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flipkart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
