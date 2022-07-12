import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../AbstractComponents";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu', templateUrl: './menu.component.html', styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends AbstractComponent implements OnInit {

  constructor(injector: Injector, private router: Router) {
    super(injector)
  }

  ngOnInit(): void {
  }

  backToMain() {
    this.router.navigate(['/']);
  }

  openUser() {
    console.dir(this.user)
  }
}
