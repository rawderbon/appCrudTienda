import { TestBed } from '@angular/core/testing';

import { ServicioFacturaService } from './servicio-factura.service';

describe('ServicioFacturaService', () => {
  let service: ServicioFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
