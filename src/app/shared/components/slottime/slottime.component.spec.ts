import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlottimeComponent } from './slottime.component';

describe('SlottimeComponent', () => {
  let component: SlottimeComponent;
  let fixture: ComponentFixture<SlottimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlottimeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlottimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
