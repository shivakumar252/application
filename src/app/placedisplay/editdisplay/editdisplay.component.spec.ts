import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdisplayComponent } from './editdisplay.component';

describe('EditdisplayComponent', () => {
  let component: EditdisplayComponent;
  let fixture: ComponentFixture<EditdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
