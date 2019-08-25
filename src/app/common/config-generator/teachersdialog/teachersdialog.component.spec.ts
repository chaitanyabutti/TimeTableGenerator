import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersdialogComponent } from './teachersdialog.component';

describe('TeachersdialogComponent', () => {
  let component: TeachersdialogComponent;
  let fixture: ComponentFixture<TeachersdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
