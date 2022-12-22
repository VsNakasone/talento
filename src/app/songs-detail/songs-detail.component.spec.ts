import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsDetailComponent } from './songs-detail.component';

describe('SongsDetailComponent', () => {
  let component: SongsDetailComponent;
  let fixture: ComponentFixture<SongsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
