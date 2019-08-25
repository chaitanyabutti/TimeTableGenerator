import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsdialogComponent } from './periodsdialog.component';

describe('PeriodsdialogComponent', () => {
  let component: PeriodsdialogComponent;
  let fixture: ComponentFixture<PeriodsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
