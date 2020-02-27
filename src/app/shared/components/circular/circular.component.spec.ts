import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircularComponent } from './circular.component';

describe('CircularComponent', () => {
  let component: CircularComponent;
  let fixture: ComponentFixture<CircularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
