import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpegniCollaboratoriComponent } from './impegni-collaboratori.component';

describe('ImpegniCollaboratoriComponent', () => {
  let component: ImpegniCollaboratoriComponent;
  let fixture: ComponentFixture<ImpegniCollaboratoriComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpegniCollaboratoriComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpegniCollaboratoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
