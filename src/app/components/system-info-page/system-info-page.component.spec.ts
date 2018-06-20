import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemInfoPageComponent } from './system-info-page.component';

describe('SystemInfoPageComponent', () => {
  let component: SystemInfoPageComponent;
  let fixture: ComponentFixture<SystemInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
