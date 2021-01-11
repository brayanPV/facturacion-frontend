import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemfacturasComponent } from './itemfacturas.component';

describe('ItemfacturasComponent', () => {
  let component: ItemfacturasComponent;
  let fixture: ComponentFixture<ItemfacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemfacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemfacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
