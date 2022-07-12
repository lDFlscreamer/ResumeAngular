import {Injector} from '@angular/core';
import {AuthService, User} from "@auth0/auth0-angular";

export class AbstractComponent {
  public authService: AuthService;

  constructor(public injector: Injector) {
    this.authService = injector.get(AuthService);
    this.authService.isAuthenticated$.subscribe(val => this.isLoggedIn = val)
    this.authService.user$.subscribe(val => this.user = val)
  }

  private _isLoggedIn: Boolean = false;

  public get isLoggedIn() {
    return this._isLoggedIn
  }

  private set isLoggedIn(value: Boolean) {
    this._isLoggedIn = value;
  }

  private _user: User | null | undefined;

  public get user() {
    return this.isLoggedIn ? this._user : null
  }

  private set user(value) {
    this._user = value;
  }

  isEmailVerified(user: any): string {
    return !user.email_verified ? "?" : ""
  }

  isAdmin() {
    return this.user?.nickname === "Andrii Tverdokhlib" || this.user?.nickname === "999screamer999"
  }
}
