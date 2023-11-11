import { Component } from '@angular/core';
import { DataService } from '../../data.service'; // Importa el servicio

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent {
  formData: any = {}; // Los datos del formulario se almacenan aquí

  constructor(private dataService: DataService) { }

  onSubmit() {
    // Llama al método del servicio para enviar los datos
    this.dataService.postData(this.formData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        // Realiza acciones adicionales después de enviar los datos
      },
      (error) => {
        console.error('Error al enviar los datos:', error);
        // Maneja el error de manera apropiada
      }
    );
  }
}











// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-congress',
//   templateUrl: './congress.component.html',
//   styleUrls: ['./congress.component.css']
// })
// export class CongressComponent {

// }
