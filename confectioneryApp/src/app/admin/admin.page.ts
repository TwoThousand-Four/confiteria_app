import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private Router: Router) { }
  
  user : UserModel = this.Router.getCurrentNavigation()?.extras.state?.['user'];

  ngOnInit() {
  }

}
