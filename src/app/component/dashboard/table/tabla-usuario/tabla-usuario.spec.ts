import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaUsuario } from './tabla-usuario';

describe('TablaUsuario', () => {
  let component: TablaUsuario;
  let fixture: ComponentFixture<TablaUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
