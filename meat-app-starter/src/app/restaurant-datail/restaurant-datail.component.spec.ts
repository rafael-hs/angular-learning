import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDatailComponent } from './restaurant-datail.component';

describe('RestaurantDatailComponent', () => {
  let component: RestaurantDatailComponent;
  let fixture: ComponentFixture<RestaurantDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
