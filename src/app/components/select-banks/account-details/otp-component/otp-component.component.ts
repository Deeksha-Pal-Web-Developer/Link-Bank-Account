import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-otp-component',
  templateUrl: './otp-component.component.html',
  styleUrls: ['./otp-component.component.scss']
})
export class OtpComponentComponent implements OnInit {
  otpForm: FormGroup;
  sec: number;
  timerId: any;
  isOtpSuccess:boolean=false;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private _bottomSheetRef: MatBottomSheetRef<OtpComponentComponent>) { }
  
  ngOnInit() {
    this.createForm()
    this.resend();
  }

  createForm(){
    this.otpForm = new FormGroup({
      otp: new FormControl("", [Validators.required, Validators.max(999999), Validators.min(100000)]),
    });
  }

  resend() {
    if (this.sec > 0)
      return;
    this.sec = 30;
    let id = setInterval(() => {
      this.sec--
      if (this.sec == 0) {
        clearInterval(id);
      }
    }, 1000);

  }

  verify() {
    //submit otp through API
    this.isOtpSuccess=true;
    setTimeout(()=>{
      this._bottomSheetRef.dismiss(true);
    },2000)
  }
}
