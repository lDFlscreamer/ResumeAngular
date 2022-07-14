import {Injector} from '@angular/core';
import {AuthService, User} from "@auth0/auth0-angular";
import {environment as env} from "../environments/environment";

export class AbstractComponent {
  public authService: AuthService;

  public isLoggedIn: Boolean = false;

  constructor(public injector: Injector) {
    this.authService = injector.get(AuthService);
    this.authService.isAuthenticated$
      .subscribe(isAuthenticated => this.isLoggedIn = isAuthenticated)
    this.authService.user$
      .subscribe(idTokenUser => this.user = idTokenUser)
  }

  private _user: User | null | undefined;

  public get user() {
    return this.isLoggedIn ? this._user : null
  }

  private set user(idTokenUser) {
    this._user = idTokenUser;
  }

  get username() {
    return this.user?.preferred_username
  }

  isEmailVerified(user: User): string {
    return (!!user.email) && !user.email_verified ? "?" : ""
  }

  getCustomField(user: User, CUSTOM_FIELD_NAME: string) {
    return user[env.ID_TOKEN_NAMESPACE_PREFIX + '/' + CUSTOM_FIELD_NAME]
  }

  isAdmin() {
    if (!this.user)
      return false;
    let userRoles = this.getCustomField(this.user, 'roles');
    return userRoles ? userRoles.includes('admin') : false;
  }


}
