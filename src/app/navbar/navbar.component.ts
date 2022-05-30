import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/model/userInfo';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  idUser:number;
  user: UserInfo;


  constructor(private userService: UserService,
    private readonly rota: ActivatedRoute,
    ){}

  ngOnInit(): void {
    this.idUser = Number(localStorage.getItem("id"));
  }
}
