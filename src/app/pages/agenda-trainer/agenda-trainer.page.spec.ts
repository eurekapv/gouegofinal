import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendaTrainerPage } from './agenda-trainer.page';

describe('AgendaTrainerPage', () => {
  let component: AgendaTrainerPage;
  let fixture: ComponentFixture<AgendaTrainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaTrainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaTrainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
