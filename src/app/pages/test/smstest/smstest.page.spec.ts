import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmstestPage } from './smstest.page';

describe('SmstestPage', () => {
  let component: SmstestPage;
  let fixture: ComponentFixture<SmstestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmstestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmstestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
