import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundFeatureComponent } from './not-found-feature.component';

describe('NotFoundFeatureComponent', () => {
  let component: NotFoundFeatureComponent;
  let fixture: ComponentFixture<NotFoundFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
