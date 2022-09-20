import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userdata = {
    userName: '',
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(
      !this.userdata.userName || this.userdata.userName =="" ||
      !this.userdata.email || this.userdata.email =="" ||
      !this.userdata.password || this.userdata.password ==""
    ){
      alert("Please fill all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify(this.userdata));
    this.router.navigate(['login']);
  }

}
