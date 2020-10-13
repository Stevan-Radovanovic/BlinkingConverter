import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as flat from 'flat';

@Component({
  selector: 'app-json-to-pdf',
  templateUrl: './json-to-pdf.component.html',
  styleUrls: ['./json-to-pdf.component.css'],
})
export class JsonToPdfComponent implements OnInit {
  constructor() {}

  onClickConvertPdf(array: Object[]) {
    let doc = new jsPDF();
    const rows = this.flatten(array);
    let col = this.createHeaders(rows[0]);
    autoTable(doc, { columns: col, body: this.convertObjectsToArrays(rows) });
    doc.save('Blinking.pdf');
  }

  flatten(items: Object[]) {
    const flattenedItems = items.map((item) => {
      return flat(item);
    });
    return flattenedItems;
  }

  convertObjectsToArrays(array: Object[]) {
    let converted = array.map((elem) => {
      return Object.values(elem);
    });
    return converted;
  }

  createHeaders(obj: Object) {
    const headers = [];
    for (const key in obj) {
      headers.push(key);
    }
    console.log(headers);
    return headers;
  }

  ngOnInit(): void {}

  mockData = {
    items: [
      {
        model: 'Samsung S7',
        chargers: '55',
        cases: '56',
        earphones: '57',
        scratched: '2',
        config: {
          serialNo: '1',
          barcode: '2',
        },
      },
      {
        model: 'Pixel XL',
        chargers: '77',
        cases: '78',
        earphones: '79',
        scratched: '4',
        config: {
          serialNo: '1',
          barcode: '2',
        },
      },
      {
        model: 'iPhone 7',
        chargers: '88',
        cases: '89',
        earphones: '90',
        scratched: '6',
        config: {
          serialNo: '1',
          barcode: '2',
        },
      },
    ],
  };
}
