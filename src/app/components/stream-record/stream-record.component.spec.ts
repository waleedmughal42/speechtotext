import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRecordComponent } from './stream-record.component';

describe('StreamRecordComponent', () => {
  let component: StreamRecordComponent;
  let fixture: ComponentFixture<StreamRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
