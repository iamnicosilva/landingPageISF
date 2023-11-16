import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos'; // Importa AOS
declare var $: any; // Declaración de jQuery


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements AfterViewInit, OnInit {
  title = 'navbar';
  ngAfterViewInit() {
    $(document).ready(()=> {
      // this.initJqueryAOS();
      console.log('ngAfterViewInit del navbar');
    })
  }

  ngOnInit(): void {
    console.log('ngOnInit del navbar')
  }

  private initJqueryAOS(){
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

