import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialaogComponent } from './login-dialaog.component';

describe('LoginDialaogComponent', () => {
  let component: LoginDialaogComponent;
  let fixture: ComponentFixture<LoginDialaogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialaogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
