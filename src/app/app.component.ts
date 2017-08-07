import {Component, OnInit} from '@angular/core';
import {IAlumno} from './alumnos.interface'
import {ClienteService} from "./cliente.service";
import {IOperadores} from "./operadores.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClienteService]
})
export class AppComponent implements OnInit {
  title = 'Bienvenido al Curso!';
  alumnos: IAlumno[] = [
    {nombres: 'Rosita', apellido: 'Chavarri', edad: 32, activo: true},
    {nombres: 'Joel', apellido: 'Sulca', edad: 26, activo: false},
    {nombres: 'Luis', apellido: 'Farfán', edad: 23, activo: true},
  ];

  operadores: IOperadores[];

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit() {
    this.clienteService.getOperadores().subscribe((operadores) => {
      this.operadores = operadores;
    });
  }
}
