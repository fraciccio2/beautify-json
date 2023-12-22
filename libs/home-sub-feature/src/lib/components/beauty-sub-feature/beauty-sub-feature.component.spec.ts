import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeautySubFeatureComponent } from './beauty-sub-feature.component';

describe('BeautySubFeatureComponent', () => {
  let component: BeautySubFeatureComponent;
  let fixture: ComponentFixture<BeautySubFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautySubFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeautySubFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
