import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  showPopup: string = 'display: none;'; // Inicialmente, la popup está oculta

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.router.url == '/'){
          this.showPopup = '';
        }
      }
    })
    
  }

  closePopup() {
    this.showPopup = 'display: none;'; // Cambia el valor para ocultar la popup
  }

  goToLecture(){
    this.closePopup();
    this.router.navigate(['/lecture']);
    setTimeout(() => {
      const element = document.getElementById('lecureLastest');
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 500);
  }
}











// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-popup',
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.css']
// })
// export class PopupComponent {

// }
