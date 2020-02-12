import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListcoursesPage } from './listcourses.page';

describe('ListcoursesPage', () => {
  let component: ListcoursesPage;
  let fixture: ComponentFixture<ListcoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcoursesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListcoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
