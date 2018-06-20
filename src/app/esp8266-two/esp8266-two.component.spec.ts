import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Esp8266TwoComponent } from './esp8266-two.component';

describe('Esp8266TwoComponent', () => {
  let component: Esp8266TwoComponent;
  let fixture: ComponentFixture<Esp8266TwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Esp8266TwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Esp8266TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
