import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsdialogComponent } from './roomsdialog.component';

describe('RoomsdialogComponent', () => {
  let component: RoomsdialogComponent;
  let fixture: ComponentFixture<RoomsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
