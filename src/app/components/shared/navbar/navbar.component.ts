import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.serive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private _heroesService:HeroesService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  buscar(texto:string){
    
    // let r = this._heroesService.buscarTexto(texto);
    let r = texto;
    this.router.navigate( ['/busqueda',r] );
    console.log(r);
  }

  
}
