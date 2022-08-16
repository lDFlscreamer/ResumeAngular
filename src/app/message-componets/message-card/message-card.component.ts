import {Component, Input, OnInit} from '@angular/core';
import {MessageData} from "../message-data";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {

  @Input()
  item!: MessageData;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  isMessageRead(message: MessageData) {
    return message.read ? " " : "";
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
}
