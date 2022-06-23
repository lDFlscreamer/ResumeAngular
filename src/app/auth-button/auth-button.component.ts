import {Component, Inject, Injector, Input, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from '@angular/common';
import {AbstractComponent} from "../AbstractComponents";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-auth-login-button',
  templateUrl: './auth-button.component.html'
})

export class AuthButtonComponent extends AbstractComponent implements OnInit {


  @Input() isLogInNeeded:Boolean =true

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
  }

}
