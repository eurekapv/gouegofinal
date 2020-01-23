import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpegniComponent } from './impegni.component';

describe('ImpegniComponent', () => {
  let component: ImpegniComponent;
  let fixture: ComponentFixture<ImpegniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpegniComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpegniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
