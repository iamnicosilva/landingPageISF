import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongressComponent } from './congress.component';

describe('CongressComponent', () => {
  let component: CongressComponent;
  let fixture: ComponentFixture<CongressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongressComponent]
    });
    fixture = TestBed.createComponent(CongressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
