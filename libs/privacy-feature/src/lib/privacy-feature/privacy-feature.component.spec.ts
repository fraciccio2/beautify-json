import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyFeatureComponent } from './privacy-feature.component';

describe('PrivacyFeatureComponent', () => {
  let component: PrivacyFeatureComponent;
  let fixture: ComponentFixture<PrivacyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
