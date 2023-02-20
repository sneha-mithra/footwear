import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearListComponent } from './footwear-list.component';

describe('FootwearListComponent', () => {
  let component: FootwearListComponent;
  let fixture: ComponentFixture<FootwearListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootwearListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootwearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
