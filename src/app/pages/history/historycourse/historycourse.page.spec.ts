import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorycoursePage } from './historycourse.page';

describe('HistorycoursePage', () => {
  let component: HistorycoursePage;
  let fixture: ComponentFixture<HistorycoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorycoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorycoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
