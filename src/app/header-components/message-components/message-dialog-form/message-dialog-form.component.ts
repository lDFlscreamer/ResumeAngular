import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MessageDialogFormData} from "../message-dialog-form-data";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs";

@Component({
  selector: 'app-message-dialog-form',
  templateUrl: './message-dialog-form.component.html',
  styleUrls: ['./message-dialog-form.component.scss']
})
export class MessageDialogFormComponent implements OnInit {

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  constructor(
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<MessageDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageDialogFormData) {
  }

  ngOnInit(): void {
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
