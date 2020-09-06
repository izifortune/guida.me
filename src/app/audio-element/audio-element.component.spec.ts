import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioElementComponent } from './audio-element.component';

describe('AudioElementComponent', () => {
  let component: AudioElementComponent;
  let fixture: ComponentFixture<AudioElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
