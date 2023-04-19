import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { OtpComponentComponent } from './otp-component/otp-component.component'
import { StorageService } from './../../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  errorMsg: boolean = false;
  banklogos: string[] = ['andhra', 'apb', 'apna', 'bob', 'hdfc'];
  accounts = [
    {
      "bankCode": 'andhra',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Savings",
      "status": "Linked"
    },
    {
      "bankCode": 'apb',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Savings",
      "status": "Linked"
    },
    {
      "bankCode": 'apna',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Current",
      "status": "Linked"
    },
    {
      "bankCode": 'bob',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Savings",
      "status": "Linked"
    },
    {
      "bankCode": 'hdfc',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Savings",
      "status": "Linked"
    },
    {
      "bankCode": 'SBI',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Current",
      "status": "Linked"
    },
    {
      "bankCode": 'kmb',
      "accountNo": "XXXX-XXXX-XXXX-1234",
      "accountType": "Savings",
      "status": "Not Linked"
    }
  ]
  selectedBanks: string[];
  finalAccounts: any[]

  constructor(private bottomSheet: MatBottomSheet,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.selectedBanks = this.storageService.getItemFromLS("selectedBanks");
    this.finalAccounts = this.accounts.filter((account) => {
      return this.selectedBanks.includes(account.bankCode)

    })
    console.log(this.finalAccounts)
  }

  openBottomSheet(accNo: any, bankCode: any): void {
    const config: MatBottomSheetConfig = {
      data: {
        mobileNo: 'xxxxx96613',
        accNo: accNo,
        bankCode: bankCode
      }
    };
    const bottomSheetRef = this.bottomSheet.open(OtpComponentComponent, config);
    bottomSheetRef.afterDismissed().subscribe((result) => {
       if(result){
        this.finalAccounts.map((account)=>{
          if(account.bankCode==bankCode)
             account.status="Linked";
        })
       }
      // Restore focus to an appropriate element for the user's workflow here.
    });
  }

  deleteAccount(bankCode: any) {
    this.finalAccounts = this.finalAccounts.filter(item=>{
      return item.bankCode!=bankCode
    });

  }


  getWidgetAssets(selectedBank: any) {
    let isLogo = this.banklogos.includes(selectedBank);
    if (isLogo)
      return `/Link-Bank-Account/assets/images/banks/${selectedBank}.svg`;
    else
      return `/Link-Bank-Account/assets/images/banks/default_bank.png`;
  }

  goToBankPage() {
    this.router.navigate(["banks"]);
  }



}
