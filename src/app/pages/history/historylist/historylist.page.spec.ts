import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorylistPage } from './historylist.page';

describe('HistorylistPage', () => {
  let component: HistorylistPage;
  let fixture: ComponentFixture<HistorylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
