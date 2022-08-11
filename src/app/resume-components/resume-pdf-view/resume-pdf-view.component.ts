import {Component, OnInit} from '@angular/core';
import {BACK_END_URL} from "../../../environments/resume_spring_urls"

@Component({
  selector: 'app-resume-pdfs-view',
  templateUrl: './resume-pdf-view.component.html',
  styleUrls: ['./resume-pdf-view.component.scss']
})
export class ResumePdfViewComponent implements OnInit {
  page: number = 1;
  totalPages: number = 0;
  isLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  getPDF_Src() {
    // request or pass into variable back end CV pdf link
    let apiUrl = BACK_END_URL.SERVER_URL.concat(BACK_END_URL.API_PREFIX).concat(String(BACK_END_URL.SERVER_API_VERSION));
    let javaCvPdfUrl = apiUrl.concat(BACK_END_URL.ENDPOINTS.JAVA_CV_PDF_FILE);
    return javaCvPdfUrl
  }

}
