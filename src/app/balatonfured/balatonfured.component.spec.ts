import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalatonfuredComponent } from './balatonfured.component';

describe('BalatonfuredComponent', () => {
  let component: BalatonfuredComponent;
  let fixture: ComponentFixture<BalatonfuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalatonfuredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalatonfuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
