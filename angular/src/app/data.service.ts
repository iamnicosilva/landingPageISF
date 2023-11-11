import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://test.isfat.org:8443/api'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) { }
  
  postData(formData: any) {
    return this.http.post(`${this.apiUrl}/registrar`, formData);
  }
}
