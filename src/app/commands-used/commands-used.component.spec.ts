import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsUsedComponent } from './commands-used.component';

describe('CommandsUsedComponent', () => {
  let component: CommandsUsedComponent;
  let fixture: ComponentFixture<CommandsUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
