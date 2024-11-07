import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-routing', // DEFINICIÓN DEL SELECTOR DEL COMPONENTE
  templateUrl: './tabla-multiplicar-routing.component.html', // RUTA DEL ARCHIVO HTML DEL COMPONENTE
  styleUrls: ['./tabla-multiplicar-routing.component.css'] // RUTA DEL ARCHIVO CSS DEL COMPONENTE
})
export class TablaMultiplicarRoutingComponent implements OnInit {
  public numero!: number; // PROPIEDAD PARA GUARDAR EL NÚMERO OBTENIDO DESDE LA RUTA
  public resultados: { multiplicador: number; resultado: number }[] = [];
  // ARRAY PARA GUARDAR LOS RESULTADOS DE LA TABLA DE MULTIPLICAR

  // INYECTAMOS LOS SERVICIOS Router Y ActivatedRoute EN EL CONSTRUCTOR
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  // MÉTODO PARA VOLVER AL MENÚ PRINCIPAL
  goToHome(): void {
    this._router.navigate(['/']); // UTILIZA EL SERVICIO Router PARA REDIRIGIR A LA RUTA '/'
  }

  // MÉTODO QUE SE EJECUTA AL INICIAR EL COMPONENTE
  ngOnInit(): void {
    // SUSCRIBIRSE AL PARÁMETRO DE LA RUTA USANDO EL SERVICIO ActivatedRoute
    this._activeRoute.params.subscribe(params => {
      this.numero = +params['numero']; // OBTENEMOS EL PARÁMETRO 'numero' DE LA RUTA Y LO CONVERTIMOS A NÚMERO
      this.generarTabla(); // LLAMAMOS AL MÉTODO PARA GENERAR LA TABLA DE MULTIPLICAR
    });
  }

  // MÉTODO PARA GENERAR LA TABLA DE MULTIPLICAR
  generarTabla(): void {
    this.resultados = []; // REINICIAMOS EL ARRAY DE RESULTADOS
    for (let i = 0; i <= 10; i++) {
      // ITERAMOS DESDE 0 HASTA 10 PARA GENERAR LOS RESULTADOS
      this.resultados.push({ multiplicador: i, resultado: this.numero * i });
      // AGREGAMOS UN OBJETO CON EL MULTIPLICADOR Y SU RESULTADO AL ARRAY
    }
  }
}
