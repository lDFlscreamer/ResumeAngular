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


  readMessage(id:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.READ_MESSAGE)
      .concat('/').concat(id);
    this.http.post<any>(endpointUrl, httpOptions)
      .subscribe({
        error: error => {
          //todo change when endpoint will be ready
          console.error("future update will add this functionality")
        }
      });

  }

  isMessageRead(message:MessageData){
    return message.read?" ":"";
  }

}
