import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  totalbill = 0;
  url = 'https://civil-tempo-328515.appspot.com/Home/Post';
  row = [
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
    {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    },
  ];
  order: boolean;
  constructor(private http: HttpClient, public dialogService: DialogService) {}

  ngOnInit() {
    this.row[0].id = '1';
    this.row[1].id = '2';
    this.row[2].id = '3';
  }

  addTable() {
    console.log(this.row.length);
    const obj = {
      id: '',
      name: '',
      price: '',
      quantity: '',
      total: '',
    };

    this.row.push(obj);
    this.row[this.row.length - 1].id = this.row.length.toString();
  }

  deleteRow(x) {
    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }

  GrandTotal() {
    let that = this;
    this.totalbill = 0;
    this.row.forEach((item) => {
      if (item.quantity && item.price) {
        this.totalbill += Number(item.quantity) * Number(item.price);
      }
    });
    console.log(this.totalbill);
    return this.totalbill;
  }
  addOrder() {
    this.order = true;
    this.openModal();
  }
  openModal() {
    var data = null; //call api
    this.dialogService.openModal(
      'Confirmation',
      'Do you want to place a total order for Rs. ' + this.GrandTotal(),
      () => {
        //confirmed
        console.log('Yes');
        const resp = this.http.post(this.url, this.row).subscribe(
          (response: any) => {
            console.log(response);
            this.dialogService.openModal(
              'Success',
              'Your order has been submitted \n    ' +
                response.model
                  .map(function (val) {
                    return val.name;
                  })
                  .join(', '),
              () => {}, false,
              
            );
          },
          (response) => {
            this.dialogService.openModal(
              'Error',
              'Error has occured while submiting',
              () => {}
            );
            console.log(response);
          }
        );
      },true
     
    );
  }
}
