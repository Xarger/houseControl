import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Esp8266OneComponent } from './esp8266-one.component';

describe('Esp8266OneComponent', () => {
  let component: Esp8266OneComponent;
  let fixture: ComponentFixture<Esp8266OneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Esp8266OneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Esp8266OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
