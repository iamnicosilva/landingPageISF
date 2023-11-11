import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos'; // Importa AOS
declare var $: any; // Declaración de jQuery


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements AfterViewInit {
  title = 'navbar';
  ngAfterViewInit() {
    AOS.init();
    // Inicialización de Bootstrap (si es necesario)
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    // Otras inicializaciones de jQuery
  }
}










// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {

// }

