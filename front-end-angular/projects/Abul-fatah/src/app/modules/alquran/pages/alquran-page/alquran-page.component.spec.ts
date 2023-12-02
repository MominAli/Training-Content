import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquranPageComponent } from './alquran-page.component';

describe('AlquranPageComponent', () => {
  let component: AlquranPageComponent;
  let fixture: ComponentFixture<AlquranPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquranPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquranPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
