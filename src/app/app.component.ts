import {Component, ElementRef, ViewChild} from '@angular/core';
import {ContactService} from './services/contact.service';
import {Contact} from './models/contact';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];
  dataSource;
  index: number;
  id: number;
  constructor(private dataService: ContactService) {}

}
