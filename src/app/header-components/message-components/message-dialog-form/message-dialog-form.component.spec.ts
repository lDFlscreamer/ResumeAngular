import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogFormComponent } from './message-dialog-form.component';

describe('MessageDialogFormComponent', () => {
  let component: MessageDialogFormComponent;
  let fixture: ComponentFixture<MessageDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
