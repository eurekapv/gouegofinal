import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendaTrainerDetailPage } from './agenda-trainer-detail.page';

describe('AgendaTrainerDetailPage', () => {
  let component: AgendaTrainerDetailPage;
  let fixture: ComponentFixture<AgendaTrainerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaTrainerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaTrainerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
