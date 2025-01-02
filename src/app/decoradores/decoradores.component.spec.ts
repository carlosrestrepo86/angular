import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresComponent } from './decoradores.component';

describe('DecoradoresComponent', () => {
  let component: DecoradoresComponent;
  let fixture: ComponentFixture<DecoradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
