import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDespesaComponent } from './detalhe-despesa.component';

describe('DetalheDespesaComponent', () => {
  let component: DetalheDespesaComponent;
  let fixture: ComponentFixture<DetalheDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheDespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
