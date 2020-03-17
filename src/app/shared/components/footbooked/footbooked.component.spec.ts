import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootbookedComponent } from './footbooked.component';

describe('FootbookedComponent', () => {
  let component: FootbookedComponent;
  let fixture: ComponentFixture<FootbookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbookedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
