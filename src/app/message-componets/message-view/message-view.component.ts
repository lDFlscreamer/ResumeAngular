import {Component, Injector, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls";
import {MessageData} from "../message-data";
import {AbstractComponent} from "../../AbstractComponents";

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent extends AbstractComponent implements OnInit {
  messages: Array<MessageData> | undefined;

  constructor(injector: Injector, private http: HttpClient) {
    super(injector)
  }

  ngOnInit(): void {
    this.reloadMessages()
  }

  reloadMessages() {
    let endpointUrl = this.getReloadMessageEndpointUrl();
    this.http.get<Array<MessageData>>(endpointUrl)
      .subscribe({
        next: data => {
          this.messages = data;
        },
        error: error => {
          console.error('Can`t reload message!', error);
        }
      });
  }

  getReloadMessageEndpointUrl() {
    let endpointUrl;
    if (this.user) {
      endpointUrl = this.getReloadMessageUrlForUser();
    } else {
      endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.PUBLIC_MESSAGE)
    }
    return endpointUrl;
  }

  getReloadMessageUrlForUser() {
    let endpointUrl;
    if (this.isAdmin()) {
      endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE);
    } else {
      endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.PUBLIC_MESSAGE)
    }
    return endpointUrl;
  }
}
