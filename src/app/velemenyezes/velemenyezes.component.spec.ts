import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelemenyezesComponent } from './velemenyezes.component';

describe('VelemenyezesComponent', () => {
  let component: VelemenyezesComponent;
  let fixture: ComponentFixture<VelemenyezesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelemenyezesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelemenyezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
