import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarFeatureComponent } from './navbar-feature.component';

describe('NavbarFeatureComponent', () => {
  let component: NavbarFeatureComponent;
  let fixture: ComponentFixture<NavbarFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
