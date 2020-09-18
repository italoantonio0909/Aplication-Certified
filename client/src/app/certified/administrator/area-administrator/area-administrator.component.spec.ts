import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministratorComponent } from './area-administrator.component';

describe('AreaAdministratorComponent', () => {
  let component: AreaAdministratorComponent;
  let fixture: ComponentFixture<AreaAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
