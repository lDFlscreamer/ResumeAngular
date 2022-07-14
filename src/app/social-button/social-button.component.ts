import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent implements OnInit {
  @Input() svgIconName: String | undefined;
  @Input() socialName: String | undefined;
  @Input() socialPageLink: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  openSocial() {
    if (this.socialPageLink)
      window.open(this.socialPageLink);
  }
}
