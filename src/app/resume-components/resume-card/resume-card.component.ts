import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResumeData} from "../resume-data";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {API_URL, BACK_END_URL} from "../../../environments/resume_spring_urls";

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {

  @Input()
  item!: ResumeData;
  @Output()
  reloadEvent = new EventEmitter();

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  openResumeView() {
    this.router.navigate(['/resume/'.concat(this.item._id)]);
  }

  deleteResume() {
    let endpointUrl = API_URL.concat(BACK_END_URL.ENDPOINTS.USER_RESUME)
      .concat('/').concat(this.item._id);
    this.http.delete(endpointUrl)
      .subscribe({
        next: () => {
          this.reloadEvent.emit();
        },
        error: error => {
          console.error('Can`t delete message!', error);
        }
      });
  }


}
