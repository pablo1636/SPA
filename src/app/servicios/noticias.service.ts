import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { 


    console.log('Servicio activo');

  }

getNoticias(){

  return this.http.get('https://62707e1de1c7aec428f46593.mockapi.io/api/back/noticia');


}

}
