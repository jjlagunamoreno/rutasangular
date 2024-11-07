import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit {
  public numero !: number;
  public doble !: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  redirect(num: number): void {
    //NOS VAMOS A LLAMAR A NOSOTROS MISMOS ENVIANDO EN LA RUTA EL
    //PARÁMETRO DEL NÚMERO RECIBIDO
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //NOS SUSCRIBIMOS A LOS PARAMETROS QUE PUEDAN VENIR EN UNA RUTA
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE Params SE RECUPERAN LOS PARAMETROS POR SU NOMBRE
      //CON LA SIGUIENTE SINTAXIS: params['PARAMETER NAME']
      //EN ESTE EJEMPLO, EL PARAMETRO SERÁ OPCIONAL, POR LO 
      //QUE VAMOS A PREGUNTAR ANTES DE ASIGNAR
      if (parametros['numero'] != null) {
        //LOS PARAMETROS SON STRING
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero * 2;
      }
    })
  }
}
