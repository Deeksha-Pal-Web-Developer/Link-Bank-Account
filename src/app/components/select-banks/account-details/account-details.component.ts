import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {

  accounts = [
    {
      "value": "option1",
      "checked": false
    },
    {
      "value": "option2",
      "checked": false
    },
    {
      "value": "option3",
      "checked": false
    },
    {
      "value": "option4",
      "checked": false
    },
    {
      "value": "option3",
      "checked": false
    },
    {
      "value": "option4",
      "checked": false
    }
  ]

  deleteItem(item: any) {
    const index = this.accounts.indexOf(item);
    if (index > -1) {
      this.accounts.splice(index, 1);
    }
  }


}
