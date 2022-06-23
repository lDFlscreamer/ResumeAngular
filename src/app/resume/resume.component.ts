import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  items:Array<String> = []

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(` line ${i}`)
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


}
