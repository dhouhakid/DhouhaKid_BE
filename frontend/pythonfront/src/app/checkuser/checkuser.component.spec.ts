import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkusercomponent } from './checkuser.component';

describe('Checkusercomponent', () => {
  let component: Checkusercomponent;
  let fixture: ComponentFixture<Checkusercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Checkusercomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkusercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
