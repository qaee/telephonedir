import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule
  ], exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MmoduleModule { }
