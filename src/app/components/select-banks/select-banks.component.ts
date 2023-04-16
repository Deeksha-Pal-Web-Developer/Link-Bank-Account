import { Bank } from './../../models/bank.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-select-banks',
  templateUrl: './select-banks.component.html',
  styleUrls: ['./select-banks.component.scss']
})

export class SelectBanksComponent implements OnInit {
  banks: Bank[] = [];
  searchValue: any;
  errorMsg: boolean = false;
  selectedBanks: any = [];

  constructor(
    //
  ) { }

  ngOnInit() {
    this.banks = this.getJsonBanks().map((jsonObj: any) => {
      const bank = new Bank();
      bank.bankName = jsonObj.bankName;
      bank.bankCode = jsonObj.bankCode;
      return bank;
    });
  }

  searchBank() {
    let searchCount = 0;
    this.banks.map((bank: any) => {
      if (bank.bankName.toLowerCase().includes(this.searchValue.toLowerCase())) {
        bank.selected = true;
        searchCount += 1;
      } else {
        bank.selected = false
      }
    });
    this.errorMsg = searchCount ? false : true;
  }

  clear() {
    this.searchValue = "";
    this.errorMsg = false;
    this.banks.map((bank: any) => {
      if (!bank.selected) {
        bank.selected = true;
      }
    });
  }

  getWidgetAssets(selectedBank: any) {
    if (selectedBank == 'default_bank')
      return `/assets/images/banks/${selectedBank}.png`;
    else
      return `/assets/images/banks/${selectedBank}.svg`;
  }

  updateSelectedBanks(event: Event, val: any) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedBanks.push(val);
      // 
      this.banks.map((bank: any) => {
        if (bank.bankCode == val)
          bank.checked = true
      })
      // 

    } else {
      this.selectedBanks = this.selectedBanks.filter((item: any) => item != val);
      // 
      this.banks.map((bank: any) => {
        if (bank.bankCode == val)
          bank.checked = false
      })

      // 
    }
  }

  remove(val: any) {
    this.banks.map((bank: any) => {
      if (bank.bankCode == val) {
        bank.checked = false;
      }
    });

    this.selectedBanks = this.selectedBanks.filter((item: any) => item != val);
  }


  getJsonBanks() {
    return (
      [
        {
          "bankName": "Apna Bank",
          "bankCode": "apna",
        },
        {
          "bankName": "Andhra Bank",
          "bankCode": "andhra",
        },
        {
          "bankName": "HDFC Bank",
          "bankCode": "hdfc",
        },
        {
          "bankName": "Bank of Baroda",
          "bankCode": "bob",
        },
        {
          "bankName": "Airtel Payments Bank",
          "bankCode": "apb",
        },
        {
          "bankName": "State Bank of India",
          "bankCode": "SBI",
        },
        {
          "bankName": "kotak mahindra bank",
          "bankCode": "kmb",
        }
      ]
    )

  }
}
