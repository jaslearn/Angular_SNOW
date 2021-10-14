import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTwoComponent } from './data-binding-two.component';

describe('DataBindingTwoComponent', () => {
  let component: DataBindingTwoComponent;
  let fixture: ComponentFixture<DataBindingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
