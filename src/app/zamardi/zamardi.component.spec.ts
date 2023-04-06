import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZamardiComponent } from './zamardi.component';

describe('ZamardiComponent', () => {
  let component: ZamardiComponent;
  let fixture: ComponentFixture<ZamardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZamardiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZamardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
