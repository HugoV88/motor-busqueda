import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];

  termino: string;

// tslint:disable-next-line: variable-name
  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param => {
      this.termino = param.data;
      this.heroes = this._heroesService.getBusqueda(param.data);
      // console.log(this.heroes);
    });
  }
  
  verHeroe()
}
