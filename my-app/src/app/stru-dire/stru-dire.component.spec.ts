import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruDireComponent } from './stru-dire.component';

describe('StruDireComponent', () => {
  let component: StruDireComponent;
  let fixture: ComponentFixture<StruDireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StruDireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StruDireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
