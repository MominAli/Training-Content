import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDynamicGridComponent } from './kendo-dynamic-grid.component';

describe('KendoDynamicGridComponent', () => {
  let component: KendoDynamicGridComponent;
  let fixture: ComponentFixture<KendoDynamicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoDynamicGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDynamicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
