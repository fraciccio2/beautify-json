import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftCardUiComponent } from './left-card-ui.component';

describe('LeftCardUiComponent', () => {
  let component: LeftCardUiComponent;
  let fixture: ComponentFixture<LeftCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftCardUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
