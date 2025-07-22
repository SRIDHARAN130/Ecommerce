import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { shareImports } from '../../sharedModules';


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.html',
  imports:[...shareImports]
})
export class PaymentDialog {
  selectedPayment: string = '';

  paymentOptions = ['COD', 'Paytm', 'PhonePe'];

  constructor(
    public dialogRef: MatDialogRef<PaymentDialog>
  ) {}

  confirm() {
    this.dialogRef.close(this.selectedPayment);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
