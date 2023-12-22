import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightCardUiComponent } from './right-card-ui.component';

describe('RightCardUiComponent', () => {
  let component: RightCardUiComponent;
  let fixture: ComponentFixture<RightCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightCardUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RightCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
