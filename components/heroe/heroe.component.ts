import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {}

// tslint:disable-next-line: variable-name
  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(param => {
      // console.log(param.id);
      this.heroe = this._heroesService.getHeroe(param.id);
    })
  }

}
