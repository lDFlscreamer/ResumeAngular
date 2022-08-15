import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls";
import {MatDialog} from "@angular/material/dialog";
import {AnswerDialogFormComponent} from "../answer-dialog-form/answer-dialog-form.component";
import {MessageData} from "../message-data";

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.scss']
})
export class AnswerButtonComponent implements OnInit {

  @Input()
  item!: MessageData;

  constructor(public dialog: MatDialog, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AnswerDialogFormComponent, {
      width: '40%',
      data: ""
    });

    dialogRef.afterClosed().subscribe(message => {
      this.sendMessage(message)
    });
  }


  sendMessage(message: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.MESSAGE)
      .concat("/").concat(this.item._id).concat("/Answer");
    this.http.post<any>(endpointUrl, message, httpOptions)
      .subscribe({
        error: error => {
          console.error('Can`t send answer!', error);
        }
      });
  }

}
