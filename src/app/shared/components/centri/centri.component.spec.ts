import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentriComponent } from './centri.component';

describe('CentriComponent', () => {
  let component: CentriComponent;
  let fixture: ComponentFixture<CentriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentriComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
