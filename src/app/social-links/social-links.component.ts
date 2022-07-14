import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  public socialButtons = new Array<SocialButtonOptions>()

  constructor() {
    this.appendSocialButton(
      "LinkedIn",
      "linkedin-box",
      "https://www.linkedin.com/in/developer-andrii-tverdokhlib")
    this.appendSocialButton(
      "GitHub",
      "github",
      "https://github.com/lDFlscreamer")
    this.appendSocialButton(
      "Telegram",
      "telegram",
      "https://t.me/Captain_Screamer")
    this.appendSocialButton(
      "Instagram",
      "instagram",
      "https://www.instagram.com/captain_screamer/")
  }

  ngOnInit(): void {
    console.dir(this.socialButtons)
  }

  appendSocialButton(socialName: string,
                     svgIconName: string,
                     pageLink: string) {
    this.socialButtons.push(
      new SocialButtonOptions(socialName, svgIconName, pageLink))
  }

}

class SocialButtonOptions {
  socialName: string
  svgIconName: string
  pageLink: string

  constructor(socialName: string,
              svgIconName: string,
              pageLink: string) {
    this.socialName = socialName;
    this.svgIconName = svgIconName;
    this.pageLink = pageLink;
  }
}
