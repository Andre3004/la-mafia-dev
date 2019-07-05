import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagamentoFormComponent } from './forma-pagamento-form.component';

describe('FormaPagamentoFormComponent', () => {
  let component: FormaPagamentoFormComponent;
  let fixture: ComponentFixture<FormaPagamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaPagamentoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
