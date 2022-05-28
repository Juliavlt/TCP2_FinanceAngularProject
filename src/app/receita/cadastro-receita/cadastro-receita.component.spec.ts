import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReceitaComponent } from './cadastro-receita.component';

describe('CadastroReceitaComponent', () => {
  let component: CadastroReceitaComponent;
  let fixture: ComponentFixture<CadastroReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
