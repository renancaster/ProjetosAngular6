import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  )

  it('deve garantiar que 5 - 4 = 1',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(5, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    })
  )

  it('deve garantir que 4 / 2 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })
  )

  it('deve garantir que 5 * 3 = 15',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(5, 3, CalculadoraService.MULTIPLICACAO);
      expect(divisao).toEqual(15);
    })
  )

  it('deve garantiar que não seja feita nenhuma operação',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let exception = service.calcular(2, 9, "%");
      expect(exception).toEqual(0);
    })
  )

});
