import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampiNewPage } from './campi-new.page';

describe('CampiNewPage', () => {
  let component: CampiNewPage;
  let fixture: ComponentFixture<CampiNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampiNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampiNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
