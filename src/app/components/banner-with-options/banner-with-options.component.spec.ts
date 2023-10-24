import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWithOptionsComponent } from './banner-with-options.component';

describe('BannerWithOptionsComponent', () => {
  let component: BannerWithOptionsComponent;
  let fixture: ComponentFixture<BannerWithOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerWithOptionsComponent]
    });
    fixture = TestBed.createComponent(BannerWithOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
