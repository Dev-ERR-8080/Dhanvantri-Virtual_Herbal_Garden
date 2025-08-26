import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AYUSHComponent } from './ayush.component';

describe('AYUSHComponent', () => {
  let component: AYUSHComponent;
  let fixture: ComponentFixture<AYUSHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AYUSHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AYUSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
