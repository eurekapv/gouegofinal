import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumericInputUpDownComponent } from './numeric-input-up-down.component';

describe('NumericInputUpDownComponent', () => {
  let component: NumericInputUpDownComponent;
  let fixture: ComponentFixture<NumericInputUpDownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericInputUpDownComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumericInputUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
