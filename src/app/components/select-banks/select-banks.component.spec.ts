import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBanksComponent } from './select-banks.component';

describe('SelectBanksComponent', () => {
  let component: SelectBanksComponent;
  let fixture: ComponentFixture<SelectBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
