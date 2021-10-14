import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDireComponent } from './custom-dire.component';

describe('CustomDireComponent', () => {
  let component: CustomDireComponent;
  let fixture: ComponentFixture<CustomDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
