import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeriodicCourseDetailCalendarPage } from './periodic-course-detail-calendar.page';

describe('PeriodicCourseDetailCalendarPage', () => {
  let component: PeriodicCourseDetailCalendarPage;
  let fixture: ComponentFixture<PeriodicCourseDetailCalendarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicCourseDetailCalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodicCourseDetailCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
