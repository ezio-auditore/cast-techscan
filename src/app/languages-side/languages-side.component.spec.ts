import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesSideComponent } from './languages-side.component';

describe('LanguagesSideComponent', () => {
  let component: LanguagesSideComponent;
  let fixture: ComponentFixture<LanguagesSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
