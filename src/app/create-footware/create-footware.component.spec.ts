import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFootwareComponent } from './create-footware.component';

describe('CreateFootwareComponent', () => {
  let component: CreateFootwareComponent;
  let fixture: ComponentFixture<CreateFootwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFootwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFootwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
