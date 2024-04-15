import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathModalComponent } from './path-modal.component';

describe('PathModalComponent', () => {
  let component: PathModalComponent;
  let fixture: ComponentFixture<PathModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathModalComponent]
    });
    fixture = TestBed.createComponent(PathModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
