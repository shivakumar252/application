import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedisplayComponent } from './placedisplay.component';

describe('PlacedisplayComponent', () => {
  let component: PlacedisplayComponent;
  let fixture: ComponentFixture<PlacedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
