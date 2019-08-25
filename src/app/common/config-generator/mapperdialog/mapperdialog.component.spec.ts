import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperdialogComponent } from './mapperdialog.component';

describe('MapperdialogComponent', () => {
  let component: MapperdialogComponent;
  let fixture: ComponentFixture<MapperdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapperdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapperdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
