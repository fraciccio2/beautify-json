import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewerSubFeatureComponent } from './viewer-sub-feature.component';

describe('ViewerSubFeatureComponent', () => {
  let component: ViewerSubFeatureComponent;
  let fixture: ComponentFixture<ViewerSubFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewerSubFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewerSubFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
