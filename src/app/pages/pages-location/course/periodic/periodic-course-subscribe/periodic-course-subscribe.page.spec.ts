import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeriodicCourseSubscribePage } from './periodic-course-subscribe.page';

describe('PeriodicCourseSubscribePage', () => {
  let component: PeriodicCourseSubscribePage;
  let fixture: ComponentFixture<PeriodicCourseSubscribePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicCourseSubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodicCourseSubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
