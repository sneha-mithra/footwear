import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearDetailsComponent } from './footwear-details.component';

describe('FootwearDetailsComponent', () => {
  let component: FootwearDetailsComponent;
  let fixture: ComponentFixture<FootwearDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootwearDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootwearDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
