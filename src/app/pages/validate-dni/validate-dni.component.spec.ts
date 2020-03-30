import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDniComponent } from './validate-dni.component';

describe('ValidateDniComponent', () => {
  let component: ValidateDniComponent;
  let fixture: ComponentFixture<ValidateDniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateDniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
