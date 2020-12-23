import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllegatilistPage } from './allegatilist.page';

describe('AllegatilistPage', () => {
  let component: AllegatilistPage;
  let fixture: ComponentFixture<AllegatilistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegatilistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllegatilistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
