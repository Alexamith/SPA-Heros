import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.serive';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  marvel:boolean = false;
  constructor(private activatedRouter:ActivatedRoute,private _heroesService:HeroesService) 
  {

      this.activatedRouter.params.subscribe( params => {
        this.heroe = this._heroesService.getHeroe(params['id']);
      });
      this.definirCasa();
   }

  ngOnInit(): void {
  }

  definirCasa(){
    if(this.heroe.casa == 'Marvel'){
      this.marvel = true;
    }
    console.log(`Casa: ${this.marvel}`)
  }
}
