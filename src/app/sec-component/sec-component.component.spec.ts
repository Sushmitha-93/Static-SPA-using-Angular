import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComponentComponent } from './sec-component.component';

describe('SecComponentComponent', () => {
  let component: SecComponentComponent;
  let fixture: ComponentFixture<SecComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
