import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  nuevasNoticias: any[] = [];

  constructor( private NoticiasService: NoticiasService ) { 

    this.NoticiasService.getNoticias()
    .subscribe( (data: any)=> {
      console.log( data );
      this.nuevasNoticias = data;


    })
  }

  ngOnInit(): void {
  }

}
