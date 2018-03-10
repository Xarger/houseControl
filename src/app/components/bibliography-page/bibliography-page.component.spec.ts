import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographyPageComponent } from './bibliography-page.component';

describe('BibliographyPageComponent', () => {
  let component: BibliographyPageComponent;
  let fixture: ComponentFixture<BibliographyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliographyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
