import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    let user: any = localStorage.getItem("user");
    if(!user){
      alert("Email not registered!");
    }
    user = JSON.parse(user);
    if(user.email === this.userData.email && user.password === this.userData.password){
      localStorage.setItem("userLoggedIn", "TRUE");
      this.router.navigateByUrl("/tabs");
    } else{
      alert("Invalid Credencials!");
    }
  }

}
