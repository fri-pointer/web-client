import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailsPageComponent } from './university-details-page.component';

describe('UniversityDetailsPageComponent', () => {
  let component: UniversityDetailsPageComponent;
  let fixture: ComponentFixture<UniversityDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
