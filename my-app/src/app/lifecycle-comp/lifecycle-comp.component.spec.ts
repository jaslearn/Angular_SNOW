import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleCompComponent } from './lifecycle-comp.component';

describe('LifecycleCompComponent', () => {
  let component: LifecycleCompComponent;
  let fixture: ComponentFixture<LifecycleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
