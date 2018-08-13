import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMapaComponent } from './mi-mapa.component';

describe('MiMapaComponent', () => {
  let component: MiMapaComponent;
  let fixture: ComponentFixture<MiMapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiMapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
