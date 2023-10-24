import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingHelpsComponent } from './floating-helps.component';

describe('FloatingHelpsComponent', () => {
  let component: FloatingHelpsComponent;
  let fixture: ComponentFixture<FloatingHelpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingHelpsComponent]
    });
    fixture = TestBed.createComponent(FloatingHelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
