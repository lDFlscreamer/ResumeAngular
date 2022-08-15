import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../../environments/resume_spring_urls";
import {MessageData} from "../message-data";

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {
  messages: Array<MessageData> | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.reloadMessages()
  }

  reloadMessages() {
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE);
    this.http.get<Array<MessageData>>(endpointUrl)
      .subscribe({
        next: data => {
          this.messages = data;
          console.dir(this.messages)
        },
        error: error => {
          console.error('Can`t send message!', error);
        }
      });

  }

  readMessage(message: MessageData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    message.read = true;
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE);
    this.http.put<any>(endpointUrl, message, httpOptions)
      .subscribe({
        error: error => {
          console.error('Can`t update message!', error);
        }
      });

  }

  deleteMessage(id: string) {
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE)
      .concat('/').concat(id);
    this.http.delete(endpointUrl)
      .subscribe({
        error: error => {
          console.error('Can`t delete message!', error);
        }
      });

  }

  isMessageRead(message: MessageData) {
    return message.read ? " " : "";
  }

}
