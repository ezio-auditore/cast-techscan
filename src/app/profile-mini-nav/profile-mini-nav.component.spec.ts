import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMiniNavComponent } from './profile-mini-nav.component';

describe('ProfileMiniNavComponent', () => {
  let component: ProfileMiniNavComponent;
  let fixture: ComponentFixture<ProfileMiniNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMiniNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMiniNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
