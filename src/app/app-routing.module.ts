import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectBanksComponent } from './components/select-banks/select-banks.component';
import { AccountDetailsComponent } from './components/select-banks/account-details/account-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'banks', pathMatch: 'full' },
    {path: 'banks', component: SelectBanksComponent },
    {path: 'accounts', component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
