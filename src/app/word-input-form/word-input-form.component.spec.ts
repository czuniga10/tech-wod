import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInputFormComponent } from './word-input-form.component';

describe('WordInputFormComponent', () => {
  let component: WordInputFormComponent;
  let fixture: ComponentFixture<WordInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
