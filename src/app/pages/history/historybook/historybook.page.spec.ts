import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorybookPage } from './historybook.page';

describe('HistorydetailPage', () => {
  let component: HistorybookPage;
  let fixture: ComponentFixture<HistorybookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorybookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorybookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
