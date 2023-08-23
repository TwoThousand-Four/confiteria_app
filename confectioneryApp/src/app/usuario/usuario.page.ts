import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserModel } from '../models/UserModel';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private Router: Router) { }

  user : UserModel = this.Router.getCurrentNavigation()?.extras.state?.['user'];

  ngOnInit() {
    console.log(this.user);
  }

}
