import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls";
import {ResumeData} from "../resume-data";

@Component({
  selector: 'app-resume-list-view',
  templateUrl: './resume-list-view.component.html',
  styleUrls: ['./resume-list-view.component.scss']
})
export class ResumeListViewComponent implements OnInit {


  private apiUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.USER_RESUME);
  resumes: Array<ResumeData> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getResumeList();
  }

  public getResumeList() {
    this.http.get<Array<ResumeData>>(this.apiUrl)
      .subscribe({
        next: data => {
          this.resumes = data;
        },
        error: error => {
          console.error('Can`t reload message!', error);
        }
      });

  }

}
