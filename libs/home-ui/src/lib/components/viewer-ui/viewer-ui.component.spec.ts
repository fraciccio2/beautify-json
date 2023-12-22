import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerUiComponent } from './viewer-ui.component';

describe('ViewerUiComponent', () => {
  let component: ViewerUiComponent;
  let fixture: ComponentFixture<ViewerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
