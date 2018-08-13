import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiQuienesomosComponent } from './mi-quienesomos.component';

describe('MiQuienesomosComponent', () => {
  let component: MiQuienesomosComponent;
  let fixture: ComponentFixture<MiQuienesomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiQuienesomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiQuienesomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
