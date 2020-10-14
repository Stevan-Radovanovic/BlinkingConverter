import { Component, OnInit } from '@angular/core';
import * as flat from 'flat';
import * as xlsx from 'json-as-xlsx';

@Component({
  selector: 'app-json-to-xlsx',
  templateUrl: './json-to-xlsx.component.html',
  styleUrls: ['./json-to-xlsx.component.css'],
})
export class JsonToXlsxComponent implements OnInit {
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

  flatten(items: object[]): object[] {
    return items.map((item) => {
      return flat(item);
    });
  }

  onClickConvertXlsx(): void {
    const flattenedArray = this.flatten(this.mockData.items);

    const settings = {
      sheetName: 'Blinking JSON',
      fileName: 'Blinking',
      extraLength: 3,
      writeOptions: {},
    };
    xlsx(this.createHeaders(flattenedArray[0]), flattenedArray, settings, true);
  }

  ngOnInit(): void {}

  createHeaders(obj: object): object {
    const headers = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        headers.push({ label: key, value: key });
      }
    }
    return headers;
  }
}
