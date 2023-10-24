import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersHeaderComponent } from './helpers-header.component';

describe('HelpersHeaderComponent', () => {
  let component: HelpersHeaderComponent;
  let fixture: ComponentFixture<HelpersHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpersHeaderComponent]
    });
    fixture = TestBed.createComponent(HelpersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
