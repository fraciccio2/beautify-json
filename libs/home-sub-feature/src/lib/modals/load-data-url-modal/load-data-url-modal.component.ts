import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { NgThemeService } from '@beautify-json/ng';

@Component({
  selector: 'beautify-json-load-data-url-modal',
  template: `
    <div [ngClass]="{ 'dark-style': darkStyle$ | async }">
      <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Load External URL</h4>
        <button
          type="button"
          class="btn-close"
          (click)="dismiss()"
          [ngClass]="{ 'btn-close-white': darkStyle$ | async }"
        ></button>
      </div>
      <div class="modal-body">
        <div class="d-flex align-items-center">
          <label class="fw-bold me-3">URL </label>
          <input
            class="form-control"
            placeholder="https://example.com"
            [formControl]="formControlUrl"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          [disabled]="formControlUrl.invalid"
          class="btn btn-success w-100"
          (click)="close()"
        >
          Submit
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-footer {
        border: 0 !important;
        .btn {
          margin-top: 2rem;
          border-radius: 4px;
        }
      }

      .dark-style {
        .modal-header {
          background: var(--card-header-color-dark);
          color: white;
        }
        .modal-body {
          background: var(--card-header-color-dark);
          color: white;
        }
        .modal-footer {
          background: var(--card-header-color-dark);
        }
      }
    `,
  ],
})
export class LoadDataUrlModalComponent {
  formControlUrl = new FormControl('', Validators.required);

  private modalService = inject(NgbActiveModal);
  private ngThemeService = inject(NgThemeService);

  darkStyle$ = this.ngThemeService.darkStyle$;

  dismiss() {
    this.modalService.dismiss();
  }

  close() {
    this.modalService.close({
      url: this.formControlUrl.value,
    });
  }
}
