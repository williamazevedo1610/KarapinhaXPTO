import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosTratamentosComponent } from './servicos-tratamentos.component';

describe('ServicosTratamentosComponent', () => {
  let component: ServicosTratamentosComponent;
  let fixture: ComponentFixture<ServicosTratamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicosTratamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosTratamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
