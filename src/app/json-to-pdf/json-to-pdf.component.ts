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

  constructor() {}

  ngOnInit(): void {}

  onClickConvertPdf(): void {
    const doc = new jsPDF();
    const rows = this.flatten(this.mockData.items);
    const col = this.createHeaders(rows[0]);
    autoTable(doc, {
      columns: col,
      body: this.convertObjectsToArrays(rows),
      headStyles: {
        fillColor: '#ff2a4e',
        textColor: '#141414',
      },
      bodyStyles: {
        textColor: '#141414',
      },
    });
    doc.save('Blinking.pdf');
  }

  flatten(items: object[]): object[] {
    return items.map((item) => {
      return flat(item);
    });
  }

  convertObjectsToArrays(array: object[]): any  {
    return array.map((elem) => {
      return Object.values(elem);
    });
  }

  createHeaders(obj: any): any {
    const headers = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        headers.push(key);
      }
    }
    return headers;
  }
}
