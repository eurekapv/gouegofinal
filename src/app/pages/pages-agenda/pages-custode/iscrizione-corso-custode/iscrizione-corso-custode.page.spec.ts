import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IscrizioneCorsoCustodePage } from './iscrizione-corso-custode.page';

describe('IscrizioneCorsoCustodePage', () => {
  let component: IscrizioneCorsoCustodePage;
  let fixture: ComponentFixture<IscrizioneCorsoCustodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IscrizioneCorsoCustodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IscrizioneCorsoCustodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
