import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCanvasComponent } from './space-canvas.component';

describe('SpaceCanvasComponent', () => {
  let component: SpaceCanvasComponent;
  let fixture: ComponentFixture<SpaceCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
