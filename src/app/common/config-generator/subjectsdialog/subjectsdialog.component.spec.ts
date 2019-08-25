import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsdialogComponent } from './subjectsdialog.component';

describe('SubjectsdialogComponent', () => {
  let component: SubjectsdialogComponent;
  let fixture: ComponentFixture<SubjectsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
