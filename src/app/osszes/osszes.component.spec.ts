import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsszesComponent } from './osszes.component';

describe('OsszesComponent', () => {
  let component: OsszesComponent;
  let fixture: ComponentFixture<OsszesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsszesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsszesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
