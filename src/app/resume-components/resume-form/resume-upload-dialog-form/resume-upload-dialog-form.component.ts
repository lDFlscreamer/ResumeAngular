import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {ResumeDialogFormData} from "../resume-dialog-form-data";

@Component({
  selector: 'app-message-dialog-form',
  templateUrl: './resume-upload-dialog-form.component.html',
  styleUrls: ['./resume-upload-dialog-form.component.scss']
})
export class ResumeUploadDialogFormComponent implements OnInit {

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResumeDialogFormData) {
  }

  ngOnInit(): void {
  }


  onChange(event: any) {
    console.log(event)
    this.data.file = event.target.files[0];
  }

}
