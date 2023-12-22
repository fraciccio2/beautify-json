import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadDataUrlModalComponent } from './load-data-url-modal.component';

describe('LoadDataUrlModalComponent', () => {
  let component: LoadDataUrlModalComponent;
  let fixture: ComponentFixture<LoadDataUrlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadDataUrlModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadDataUrlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
