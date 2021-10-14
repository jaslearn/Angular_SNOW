import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDireComponent } from './att-dire.component';

describe('AttDireComponent', () => {
  let component: AttDireComponent;
  let fixture: ComponentFixture<AttDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
