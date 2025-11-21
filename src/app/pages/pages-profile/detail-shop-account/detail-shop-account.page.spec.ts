import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailShopAccountPage } from './detail-shop-account.page';

describe('DetailShopAccountPage', () => {
  let component: DetailShopAccountPage;
  let fixture: ComponentFixture<DetailShopAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailShopAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
