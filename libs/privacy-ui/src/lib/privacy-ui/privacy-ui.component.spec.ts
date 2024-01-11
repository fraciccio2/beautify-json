import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyUiComponent } from './privacy-ui.component';

describe('PrivacyUiComponent', () => {
  let component: PrivacyUiComponent;
  let fixture: ComponentFixture<PrivacyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
