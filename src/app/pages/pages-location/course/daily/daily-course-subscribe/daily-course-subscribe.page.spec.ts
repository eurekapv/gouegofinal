import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyCourseSubscribePage } from './daily-course-subscribe.page';

describe('DailyCourseSubscribePage', () => {
  let component: DailyCourseSubscribePage;
  let fixture: ComponentFixture<DailyCourseSubscribePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCourseSubscribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyCourseSubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
