import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSystemPageComponent } from './total-system-page.component';

describe('TotalSystemPageComponent', () => {
  let component: TotalSystemPageComponent;
  let fixture: ComponentFixture<TotalSystemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalSystemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSystemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
