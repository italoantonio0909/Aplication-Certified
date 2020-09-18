import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCertifiedComponent } from './area-certified.component';

describe('AreaCertifiedComponent', () => {
  let component: AreaCertifiedComponent;
  let fixture: ComponentFixture<AreaCertifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCertifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
