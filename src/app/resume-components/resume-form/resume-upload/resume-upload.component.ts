import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {API_URL, BACK_END_URL} from "../../../../environments/resume_spring_urls";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ResumeDialogFormData} from "../resume-dialog-form-data";
import {ResumeUploadDialogFormComponent} from "../resume-upload-dialog-form/resume-upload-dialog-form.component";

@Component({
  selector: 'app-resume-form-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.scss']
})
export class ResumeUploadComponent implements OnInit {
  @Input()
  resumeId!: string;

  @Input()
  text: string = "Upload new Resume";

  @Output()
  reloadEvent = new EventEmitter();

  constructor(public dialog: MatDialog,
              private http: HttpClient) {
    console.log(this.text)
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResumeUploadDialogFormComponent, {
      width: '40%',
      data: {
        position: "any"
      }
    });

    dialogRef.afterClosed().subscribe(resume => {
      this.uploadResume(resume)
    });
  }

  sendRequest(apiUrl: string, position: string, file: File) {

    const formData = new FormData();

    formData.append("file", file, file.name);
    formData.append("position", position);

    return this.http.post(apiUrl, formData).subscribe(
      {
        next: () => {
          this.reloadEvent.emit();
        },
        error: error => {
          console.error('Can`t send message!', error);
        }
      }
    )
  }

  public getApiUrl() {
    if (this.resumeId) {
      return API_URL.concat(BACK_END_URL.ENDPOINTS.RESUME).concat("/").concat(this.resumeId);
    }
    return API_URL.concat(BACK_END_URL.ENDPOINTS.USER_RESUME).concat("/uploadResume");
  }

  private uploadResume(resume: ResumeDialogFormData) {
    this.sendRequest(this.getApiUrl(), resume.position, resume.file)
  }

}
