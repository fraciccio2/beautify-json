import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextSubFeatureComponent } from './text-sub-feature.component';

describe('TextSubFeatureComponent', () => {
  let component: TextSubFeatureComponent;
  let fixture: ComponentFixture<TextSubFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextSubFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextSubFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
