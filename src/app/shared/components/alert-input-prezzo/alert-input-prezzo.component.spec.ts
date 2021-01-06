import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertInputPrezzoComponent } from './alert-input-prezzo.component';

describe('AlertInputPrezzoComponent', () => {
  let component: AlertInputPrezzoComponent;
  let fixture: ComponentFixture<AlertInputPrezzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertInputPrezzoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertInputPrezzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
