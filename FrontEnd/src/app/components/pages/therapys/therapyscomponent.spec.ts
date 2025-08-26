import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapysComponent } from './therapys.component';

describe('TherapieseComponent', () => {
  let component: TherapysComponent;
  let fixture: ComponentFixture<TherapysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
