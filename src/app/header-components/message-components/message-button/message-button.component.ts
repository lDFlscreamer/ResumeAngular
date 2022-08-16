import {Component, Injector, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessageDialogFormComponent} from "../message-dialog-form/message-dialog-form.component";
import {MessageDialogFormData} from "../message-dialog-form-data";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, BACK_END_URL} from "../../../../environments/resume_spring_urls"
import {AbstractComponent} from "../../../AbstractComponents";

@Component({
  selector: 'app-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.scss']
})
export class MessageButtonComponent extends AbstractComponent implements OnInit {
  constructor(public dialog: MatDialog,
              private http: HttpClient,
              injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogFormComponent, {
      width: '40%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(message => {
      this.sendMessage(message)
    });
  }


  sendMessage(message: MessageDialogFormData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE);
    this.http.post<any>(endpointUrl, message, httpOptions)
      .subscribe({
        error: error => {
          console.error('Can`t send message!', error);
        }
      });
  }
}
