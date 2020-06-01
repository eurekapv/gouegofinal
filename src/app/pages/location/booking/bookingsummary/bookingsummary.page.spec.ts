import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingsummaryPage } from './bookingsummary.page';

describe('BookingsummaryPage', () => {
  let component: BookingsummaryPage;
  let fixture: ComponentFixture<BookingsummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingsummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
