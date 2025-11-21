import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListShopAccountPage } from './list-shop-account.page';

describe('ListShopAccountPage', () => {
  let component: ListShopAccountPage;
  let fixture: ComponentFixture<ListShopAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShopAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
