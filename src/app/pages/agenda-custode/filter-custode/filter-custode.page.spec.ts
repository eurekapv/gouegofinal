import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterCustodePage } from './filter-custode.page';

describe('FilterCustodePage', () => {
  let component: FilterCustodePage;
  let fixture: ComponentFixture<FilterCustodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCustodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCustodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
