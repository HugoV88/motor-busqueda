import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(private _router: Router) {}

  ngOnInit() {
  }

  buscarHeroe(data: string) {
    // console.log(data);
    this._router.navigate( ['/buscar', data] )
  }
}
