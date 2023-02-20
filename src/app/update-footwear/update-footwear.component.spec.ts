import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFootwearComponent } from './update-footwear.component';

describe('UpdateFootwearComponent', () => {
  let component: UpdateFootwearComponent;
  let fixture: ComponentFixture<UpdateFootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFootwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
