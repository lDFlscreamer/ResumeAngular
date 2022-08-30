import {Component, OnInit} from '@angular/core';
import {API_URL, BACK_END_URL, MY_CURRENT_RESUME_ID} from "../../../environments/resume_spring_urls"
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ResumeData} from "../resume-data";

@Component({
  selector: 'app-resume-pdfs-view',
  templateUrl: './resume-pdf-view.component.html',
  styleUrls: ['./resume-pdf-view.component.scss']
})
export class ResumePdfViewComponent implements OnInit {

  resume!: ResumeData;
  private apiUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.RESUME);
  private resumeId: string = "/".concat(MY_CURRENT_RESUME_ID);

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.resumeId = "/".concat(id);
      }
    });
  }

  ngOnInit(): void {
    this.getResume()
  }

  getResume() {
    let apiUrlEndpoint = this.apiUrl.concat(this.resumeId);
    this.http.get<ResumeData>(apiUrlEndpoint)
      .subscribe({
        next: data => {
          this.resume = data;
          console.dir(data)
        },
        error: error => {
          console.error('Can`t reload message!', error);
        }
      });
  }

  getSrc() {
    return "data:application/pdf;base64, ".concat(this.resume.resumeFile)
  }
}
