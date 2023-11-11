import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-subnavbar',
  templateUrl: './subnavbar.component.html',
  styleUrls: ['./subnavbar.component.css']
})
export class SubnavbarComponent implements OnInit {

  rutaActual:string;
  showSubNavbar:string;
  subRoutes:{ subRoute: string, subLabel: string }[];
  subTag:string;
  section: string;


  constructor(private route: ActivatedRoute, private router: Router){

    this.rutaActual = this.router.url;
    this.showSubNavbar = 'display: none';;
    this.subRoutes = [];
    this.subTag = 'ISF';
    this.section = '/'

  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // La ruta ha cambiado, ahora puedes obtener la ruta actual
        this.rutaActual = this.router.url;

        if (this.rutaActual.startsWith('/about')) {
          this.showSubNavbar = '';
          this.subTag = 'About';
          this.section = 'about';
          this.subRoutes = [
            { subRoute: 'about#aboutMembers', subLabel: 'Members' },
            { subRoute: 'about#aboutHistory', subLabel: 'History' },
            { subRoute: 'about#aboutConstitution', subLabel: 'Constitution' }
          ];
        } else if (this.rutaActual.startsWith('/lecture')) {
          this.showSubNavbar = '';
          this.subTag = 'Lectureship Awards';
          this.section = 'lecture'
          this.subRoutes = [
            { subRoute: 'lecture#lecureLastest', subLabel: 'Lastest award-winning conferences' },
            { subRoute: 'lecture#lectureHistory', subLabel: 'History' }
          ];
        } else {
          this.showSubNavbar = 'display: none';
          this.subRoutes = [];
        }
      }
    });
  }
}
