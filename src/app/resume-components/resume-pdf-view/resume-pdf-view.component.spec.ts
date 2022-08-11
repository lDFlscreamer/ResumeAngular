import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePdfViewComponent } from './resume-pdf-view.component';

describe('ResumePDFViewComponent', () => {
  let component: ResumePdfViewComponent;
  let fixture: ComponentFixture<ResumePdfViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePdfViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePdfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
