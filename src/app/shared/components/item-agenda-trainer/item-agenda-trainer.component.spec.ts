import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemAgendaTrainerComponent } from './item-agenda-trainer.component';

describe('ItemAgendaTrainerComponent', () => {
  let component: ItemAgendaTrainerComponent;
  let fixture: ComponentFixture<ItemAgendaTrainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAgendaTrainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemAgendaTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
