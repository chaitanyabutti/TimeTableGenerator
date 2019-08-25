import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesdialogComponent } from './classesdialog.component';

describe('ClassesdialogComponent', () => {
  let component: ClassesdialogComponent;
  let fixture: ComponentFixture<ClassesdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
