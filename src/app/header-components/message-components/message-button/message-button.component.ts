import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MessageDialogFormComponent} from "../message-dialog-form/message-dialog-form.component";
import {MessageDialogFormData} from "../message-dialog-form-data";

@Component({
  selector: 'app-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.scss']
})
export class MessageButtonComponent implements OnInit {
  private author: string | undefined;
  private messageContent: string | undefined;
  private title: string | undefined;


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MessageDialogFormComponent, {
      width: '250px',
      data: {
        author: this.author,
        messageContent: this.messageContent,
        title: this.title
      }
    });

    dialogRef.afterClosed().subscribe(message => {
      console.log('The dialog was closed');
      this.fieldSet(message)
      this.sendMessage(message)
    });
  }

  // todo rename method name
  fieldSet(message: MessageDialogFormData) {
    this.author = message.author
    this.messageContent = message.messageContent
    this.title = message.title
  }

  // todo create post request
  sendMessage(message: MessageDialogFormData) {

    let author = message.author
    let messageContent = message.messageContent
    let title = message.title
    let timestamp = new Date().getTime();
  }
}
