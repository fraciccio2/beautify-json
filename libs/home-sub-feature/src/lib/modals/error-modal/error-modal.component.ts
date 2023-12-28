import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'beautify-json-error-modal',
  template: ` <div class="modal-content">
    <div class="modal-header">
      <div class="icon-box">
        <i class="bi bi-x-lg"></i>
      </div>
      <h4 class="modal-title w-100">{{ title | translate }}</h4>
    </div>
    <div class="modal-body">
      <p class="text-center" *ngIf="message">
        {{ message | translate }}
      </p>
    </div>
    <div class="modal-footer">
      <button
        class="btn btn-danger btn-block w-100"
        data-dismiss="modal"
        (click)="dismiss()"
      >
        {{ 'HomeSubFeature.Ok' | translate }}
      </button>
    </div>
  </div>`,
  styles: [
    `
      .modal-content {
        padding: 20px;
        border-radius: 5px;
        border: none;

        .modal-header {
          border-bottom: none;
          position: relative;

          h4 {
            text-align: center;
            font-size: 26px;
            margin: 30px 0 -15px;
          }

          .icon-box {
            color: #fff;
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: -6rem;
            width: 7.5rem;
            height: 7.5rem;
            border-radius: 50%;
            background: #ef513a;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

            i {
              font-size: 56px;
            }
          }
        }

        .modal-footer {
          border: none;
          text-align: center;

          .btn {
            min-height: 2.8rem;
            color: #fff;
            border-radius: var(--border-radius-c);
            background: #ef513a;
            text-decoration: none;
            transition: all 0.4s;
            line-height: normal;
            border: none;

            &:hover,
            &:focus {
              background: #da2c12;
              outline: none;
            }
          }
        }
      }
    `,
  ],
})
export class ErrorModalComponent {
  @Input() title: string = 'HomeSubFeature.Ops';
  @Input() message: string | undefined;

  private modalService = inject(NgbActiveModal);

  dismiss() {
    this.modalService.dismiss();
  }
}
