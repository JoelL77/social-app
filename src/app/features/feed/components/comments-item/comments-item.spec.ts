import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsItem } from './comments-item';

describe('CommentsItem', () => {
  let component: CommentsItem;
  let fixture: ComponentFixture<CommentsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
