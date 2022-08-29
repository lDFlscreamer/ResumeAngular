import {Component, OnInit} from '@angular/core';
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls"

@Component({
  selector: 'app-resume-form-pdfs-view',
  templateUrl: './resume-pdf-view.component.html',
  styleUrls: ['./resume-pdf-view.component.scss']
})
export class ResumePdfViewComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }


  getPDF_Src() {
    return API_URL.concat(BACK_END_URL.ENDPOINTS.JAVA_CV_PDF_FILE)
  }

}
