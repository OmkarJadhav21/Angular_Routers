import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetCompoComponent } from './forget-compo.component';

describe('ForgetCompoComponent', () => {
  let component: ForgetCompoComponent;
  let fixture: ComponentFixture<ForgetCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
