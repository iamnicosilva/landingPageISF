import { Component, AfterViewInit, OnInit } from '@angular/core';
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
    $(document).ready(()=> {
      // CHEQUEO SI SE RENDERIZÓ BIEN EL DIV:
      this.checkStickyWrapper();
      AOS.init();
    })
  }


  private checkStickyWrapper() {
    
    const div = $(document.getElementById('sticky-wrapper'));

    if (!div[0]) {
      location.reload();
    } 
    
  }
}

