import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlescontainerComponent } from './articlescontainer.component';

describe('ArticlescontainerComponent', () => {
  let component: ArticlescontainerComponent;
  let fixture: ComponentFixture<ArticlescontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlescontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
