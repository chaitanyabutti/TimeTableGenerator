import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorHomeComponent } from './generator-home.component';

describe('GeneratorHomeComponent', () => {
  let component: GeneratorHomeComponent;
  let fixture: ComponentFixture<GeneratorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
