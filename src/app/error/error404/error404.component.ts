import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
    alert("Pagina inexistente");
    this.location.back();
  }

}
