import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLoginPage } from './edit-login.page';

describe('EditLoginPage', () => {
  let component: EditLoginPage;
  let fixture: ComponentFixture<EditLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
