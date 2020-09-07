import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'dialog-payment',
  templateUrl: 'dialog-payment.html',
})
export class DialogPaymentComponent {
  public paymentCode = '';

  constructor(private dialogRef: MatDialogRef<DialogPaymentComponent>) {}

  public submit() {
    if (this.paymentCode.toLowerCase() === 'error' || !this.paymentCode) {
      // TODO display error
    } else {
      this.dialogRef.close('ok');
    }
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public code = '';

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  public submit() {
    if (this.code.toLowerCase() === 'payment') {
      this.dialog
        .open(DialogPaymentComponent)
        .afterClosed()
        .subscribe((result: any) => {
          if (result === 'ok') {
            this.router.navigate(['guide', this.code]);
          }
        });
    } else {
      this.router.navigate(['guide', this.code]);
    }
  }
}
