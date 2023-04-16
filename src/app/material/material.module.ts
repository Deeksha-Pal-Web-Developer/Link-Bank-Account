import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
// import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // MatSnackBarModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // MatSnackBarModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
