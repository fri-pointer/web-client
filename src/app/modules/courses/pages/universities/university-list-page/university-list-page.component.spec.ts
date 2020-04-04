import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityListPageComponent } from './university-list-page.component';

describe('UniversityListPageComponent', () => {
  let component: UniversityListPageComponent;
  let fixture: ComponentFixture<UniversityListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
