import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../AbstractComponents";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends AbstractComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
  }

}
