import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMarvelComponent } from './detail-marvel.component';

describe('DetailMarvelComponent', () => {
  let component: DetailMarvelComponent;
  let fixture: ComponentFixture<DetailMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
