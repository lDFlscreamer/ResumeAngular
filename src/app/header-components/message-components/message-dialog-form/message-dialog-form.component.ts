import {Component, Inject, Injector, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MessageDialogFormData} from "../message-dialog-form-data";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs";
import {AbstractComponent} from "../../../AbstractComponents";

@Component({
  selector: 'app-message-dialog-form',
  templateUrl: './message-dialog-form.component.html',
  styleUrls: ['./message-dialog-form.component.scss']
})
export class MessageDialogFormComponent extends AbstractComponent implements OnInit {

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  constructor(
    injector: Injector,
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<MessageDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageDialogFormData) {
    super(injector)
  }

  ngOnInit(): void {
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  directButtonClick(){
    this.data.direct=!this.data.direct
  }
}
