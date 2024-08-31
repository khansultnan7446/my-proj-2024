import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountaddComponent } from './bankaccountadd.component';

describe('BankaccountaddComponent', () => {
  let component: BankaccountaddComponent;
  let fixture: ComponentFixture<BankaccountaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankaccountaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankaccountaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
