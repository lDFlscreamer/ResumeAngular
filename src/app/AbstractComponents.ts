import {Injector} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

export class AbstractComponent {
  public authService: AuthService;

  constructor(public injector: Injector) {
    this.authService = injector.get(AuthService);
  }

  public get user() {
    return this.authService.getUser()
  }


  public get loggedIn() {
    console.log(this.authService.getAccessTokenSilently())
    if (!!this.authService.getAccessTokenSilently()) {
      return !!this.user;
    }
    return false;

  }
}
