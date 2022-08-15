import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {take} from "rxjs";

@Component({
  selector: 'app-answer-dialog-form',
  templateUrl: './answer-dialog-form.component.html',
  styleUrls: ['./answer-dialog-form.component.scss']
})
export class AnswerDialogFormComponent implements OnInit {

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  constructor(private _ngZone: NgZone,
              @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
