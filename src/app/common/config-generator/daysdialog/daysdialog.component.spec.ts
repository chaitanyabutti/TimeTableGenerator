import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysdialogComponent } from './daysdialog.component';

describe('DaysdialogComponent', () => {
  let component: DaysdialogComponent;
  let fixture: ComponentFixture<DaysdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
