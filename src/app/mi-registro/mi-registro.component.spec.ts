import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRegistroComponent } from './mi-registro.component';

describe('MiReguistroComponent', () => {
  let component: MiRegistroComponent;
  let fixture: ComponentFixture<MiRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
