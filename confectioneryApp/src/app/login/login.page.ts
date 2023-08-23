import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/UserModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: ''
  }

  listUser: UserModel[] = [
    new UserModel('Jorge','Gomez','jgomez@gmail.com',undefined,'USUARIO','jgomez','jorge123'),
    new UserModel('Juan','Perez','jperez@gmail.com',undefined,'ADMIN','jperez','juan123'),
    new UserModel('Carlos','Gomez','cgomez@gmail.com',undefined,'USUARIO','cgomez','carlos123'),
    new UserModel('Valentina','Gomez','vgomez@gmail.com',undefined,'ADMIN','vgomez','valentina123')
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  onSubmit(f: NgForm){
    this.listUser.forEach(element => {
      if(element.email == f.value.email && element.password == f.value.password){
        if(element.role == 'ADMIN'){
          console.log('ADMIN');
          this.router.navigate(['/admin'], {state: {user: element} });
        }else{
          console.log('USUARIO');
          this.router.navigate(['/usuario'], {state: {user: element} });
        }
      }
    });
  }

}

