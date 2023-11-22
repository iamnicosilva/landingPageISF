import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {
  formData: any = {};
  myForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      this.formData = this.myForm.value;

      this.dataService.postData(this.formData).subscribe(
        (response) => {
          console.log('Server response:', response);

          this.myForm.reset();
          this.successMessage = 'Data registered successfully.';
          this.errorMessage = ''; // Limpiar mensaje de error en caso de que haya uno previo
        },
        (error) => {
          console.error('Error sending data:', error);

          this.errorMessage = 'Error registering data. Server response: ' + error.message;
          this.successMessage = ''; // Limpiar mensaje de éxito en caso de que haya uno previo
        }
      );
    } else {
      this.errorMessage = 'Please fill out all required fields with valid data.';
      this.successMessage = ''; // Limpiar mensaje de éxito en caso de que haya uno previo
    }
  }
}








// import { Component } from '@angular/core';
// import { DataService } from '../../data.service'; // Importa el servicio

// @Component({
//   selector: 'app-congress',
//   templateUrl: './congress.component.html',
//   styleUrls: ['./congress.component.css']
// })
// export class CongressComponent {
//   formData: any = {}; // Los datos del formulario se almacenan aquí

//   constructor(private dataService: DataService) { }

//   onSubmit() {
//     // Llama al método del servicio para enviar los datos
//     this.dataService.postData(this.formData).subscribe(
//       (response) => {
//         console.log('Respuesta del servidor:', response);
//         // Realiza acciones adicionales después de enviar los datos
//       },
//       (error) => {
//         console.error('Error al enviar los datos:', error);
//         // Maneja el error de manera apropiada
//       }
//     );
//   }
// }











// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-congress',
//   templateUrl: './congress.component.html',
//   styleUrls: ['./congress.component.css']
// })
// export class CongressComponent {

// }
