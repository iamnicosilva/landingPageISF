import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos'; // Importa AOS
declare var $: any; // Declaración de jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular';
  ngAfterViewInit() {
    AOS.init();
    // Inicialización de Bootstrap (si es necesario)
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    // Otras inicializaciones de jQuery
  }
}




// import { Component, AfterViewInit } from '@angular/core';
// import * as AOS from 'aos'; // Importa AOS

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit {
//   title = 'angular';
//   ngAfterViewInit() {
//     AOS.init(); // Inicializa AOS después de que Angular ha cargado las vistas
//   }
// }



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular';
// }
