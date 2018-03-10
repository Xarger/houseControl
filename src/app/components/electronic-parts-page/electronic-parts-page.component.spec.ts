import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicPartsPageComponent } from './electronic-parts-page.component';

describe('ElectronicPartsPageComponent', () => {
  let component: ElectronicPartsPageComponent;
  let fixture: ComponentFixture<ElectronicPartsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicPartsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicPartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
