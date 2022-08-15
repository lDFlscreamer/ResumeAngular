import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDialogFormComponent } from './answer-dialog-form.component';

describe('AnswerDialogFormComponent', () => {
  let component: AnswerDialogFormComponent;
  let fixture: ComponentFixture<AnswerDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
