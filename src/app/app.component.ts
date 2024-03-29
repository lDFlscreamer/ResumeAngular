import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public auth: AuthService
  ) {
    this.matIconRegistry
      .addSvgIcon(
        `linkedin-box`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg_logo/linkedin.svg")
      )
      .addSvgIcon(
        'telegram',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg_logo/telegram.svg")
      )
      .addSvgIcon(
        'instagram',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg_logo/instagram.svg")
      )
      .addSvgIcon(
        'github',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg_logo/github.svg")
      );
  }
}
