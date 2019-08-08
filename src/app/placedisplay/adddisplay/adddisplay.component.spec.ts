import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddisplayComponent } from './adddisplay.component';

describe('AdddisplayComponent', () => {
  let component: AdddisplayComponent;
  let fixture: ComponentFixture<AdddisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
