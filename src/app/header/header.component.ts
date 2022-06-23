import {Component, Injector, Input, OnInit} from '@angular/core';
import {AbstractComponent} from "../AbstractComponents";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends AbstractComponent implements OnInit {
  @Input() title: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  isEmailVerified(user: any): string {
    return !user.email_verified ? "?" : ""
  }

}
