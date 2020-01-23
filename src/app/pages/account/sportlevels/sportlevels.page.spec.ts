import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportlevelsPage } from './sportlevels.page';

describe('SportlevelsPage', () => {
  let component: SportlevelsPage;
  let fixture: ComponentFixture<SportlevelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportlevelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportlevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
