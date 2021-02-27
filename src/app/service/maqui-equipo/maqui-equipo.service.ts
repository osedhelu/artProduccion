import { Injectable } from '@angular/core';
import { Employee, employeeDATA, positionsData } from '../../_class/maquina-Equipo.class';

@Injectable({
  providedIn: 'root'
})
export class MaquiEquipoService {

  constructor() { }
  getEmployee() : Employee {
    return employeeDATA;
}

getPositions() : string[] {
    return positionsData
}
}
