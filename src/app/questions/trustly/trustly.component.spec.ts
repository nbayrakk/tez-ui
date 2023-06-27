import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustlyComponent } from './trustly.component';

describe('TrustlyComponent', () => {
  let component: TrustlyComponent;
  let fixture: ComponentFixture<TrustlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
