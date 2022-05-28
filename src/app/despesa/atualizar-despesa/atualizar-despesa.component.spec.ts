import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDespesaComponent } from './atualizar-despesa.component';

describe('AtualizarDespesaComponent', () => {
  let component: AtualizarDespesaComponent;
  let fixture: ComponentFixture<AtualizarDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDespesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
