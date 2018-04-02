import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspberryFirstComponent } from './raspberry-first.component';

describe('RaspberryFirstComponent', () => {
  let component: RaspberryFirstComponent;
  let fixture: ComponentFixture<RaspberryFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspberryFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspberryFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
