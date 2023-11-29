import { Component } from '@angular/core';
import { ApiProvider } from '../providers/api.prov';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';

  constructor(private apiProv: ApiProvider) {
    if(apiProv.isAuthenticatedUser()) window.location.href = '/books';
  }

  public login() {
    const data = {
      email: this.email,
      password: this.password,
    };
    this.apiProv.login(data).then((res) => {
      if(res.token) {
        localStorage.setItem('token', res.token);
        window.location.href = '/books';
      }
      console.log(res);
    });
  }
}
