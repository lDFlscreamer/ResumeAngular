import {Component, OnInit} from '@angular/core';

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

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  getPDF_Src() {
    // request or pass into variable back end CV pdf link
    return "<Url>"
  }

}
