import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit, OnChanges {

  @Input() AppsArray: any;

  public apps: any = {
    registrar: false,
    editar: false,
    entradas: false,
    pagar: false,
    historial: false,
    ajustes: false
  };

  constructor() { }

  ngOnInit() {
  }


  public ngOnChanges(): void {
    if (this.AppsArray) {
      this.apps = this.AppsArray;
    }
  }
}
