import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioGuideComponent } from './audio-guide.component';

describe('AudioGuideComponent', () => {
  let component: AudioGuideComponent;
  let fixture: ComponentFixture<AudioGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
