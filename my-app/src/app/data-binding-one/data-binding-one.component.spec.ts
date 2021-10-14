import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingOneComponent } from './data-binding-one.component';

describe('DataBindingOneComponent', () => {
  let component: DataBindingOneComponent;
  let fixture: ComponentFixture<DataBindingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
