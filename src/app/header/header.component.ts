import {Component, Injector, Input, OnInit} from '@angular/core';
import {AbstractComponent} from "../AbstractComponents";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AbstractComponent implements OnInit {

  @Input() title: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }


}
