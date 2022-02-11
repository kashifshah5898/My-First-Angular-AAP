import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAddedComponent } from './data-added.component';

describe('DataAddedComponent', () => {
  let component: DataAddedComponent;
  let fixture: ComponentFixture<DataAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
