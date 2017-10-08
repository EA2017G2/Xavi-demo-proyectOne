import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdfComponentComponent } from './asdf-component.component';

describe('AsdfComponentComponent', () => {
  let component: AsdfComponentComponent;
  let fixture: ComponentFixture<AsdfComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdfComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
