import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDialogModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule,
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
    MatListModule,
    MatMenuModule
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
    MatListModule,
    MatMenuModule
  ],
  declarations: []
})
export class MmoduleModule { }
