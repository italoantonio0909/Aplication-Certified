import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryCertifiedComponent } from './add-category-certified.component';

describe('AddCategoryCertifiedComponent', () => {
  let component: AddCategoryCertifiedComponent;
  let fixture: ComponentFixture<AddCategoryCertifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryCertifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
