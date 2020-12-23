import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendaCustodePage } from './agenda-custode.page';

describe('AgendaCustodePage', () => {
  let component: AgendaCustodePage;
  let fixture: ComponentFixture<AgendaCustodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaCustodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaCustodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
