import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public hide = true;
  public signInInfo: {
    userName: string,
    password: string
  } = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signin(this.signInInfo.userName, this.signInInfo.password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
