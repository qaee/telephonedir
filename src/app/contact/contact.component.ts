import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../model/contact';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddcontactComponent} from '../addcontact/addcontact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  displayedColumns = ['Id', 'name', 'Address', 'telephoneNumber', 'button'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private contactService: ContactService, public dialog: MatDialog) { }
  ngOnInit() {
    this.getContacts();
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
  }
  getContacts(): void {
    this.contacts = this.contactService.getContacts();
  }

  openDialog(contact: Contact) {
    let dialogRef = this.dialog.open(AddcontactComponent, {
      width: '400',
      data: { name: contact.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
