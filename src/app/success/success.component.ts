import {Component, Inject, Injectable} from  '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';

@Component({
templateUrl:  './success.component.html'
})
export  class  SuccessComponent {
    constructor(private  dialogRef:  MatDialogRef<SuccessComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    }
    public  closeMe() {
        this.dialogRef.close();
    }
}