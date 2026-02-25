import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estaditicas } from './estaditicas';

describe('Estaditicas', () => {
  let component: Estaditicas;
  let fixture: ComponentFixture<Estaditicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estaditicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estaditicas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
