import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.serive';



@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {
  heroes:any[];
  termino:string;
  constructor(private activatedRouter:ActivatedRoute,private _heroesService:HeroesService) { 
    this.activatedRouter.params.subscribe( params => {
      this.termino = params['r'];
      this.heroes = this._heroesService.buscarTexto(params['r']);
    });
  }

  ngOnInit(): void {
  }

}
