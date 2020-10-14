import { Component, OnInit } from '@angular/core';
import * as flat from 'flat';

@Component({
  selector: 'app-json-to-csv',
  templateUrl: './json-to-csv.component.html',
  styleUrls: ['./json-to-csv.component.css'],
})
export class JsonToCsvComponent implements OnInit {

  mockData = {
    headers: {
      model: 'Phone Model',
      chargers: 'Chargers',
      cases: 'Cases',
      earphones: 'Earphones',
      scratched: 'Scratched',
      serialNo: 'Serial Number',
      barcode: 'Barcode',
    },

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

  onClickConvertCsv(): void {
    const flattenedArray = this.flatten(this.mockData.items);
    console.log(flattenedArray);
    this.exportCSVFile(
      this.createHeaders(flattenedArray[0]),
      flattenedArray,
      'Blinking'
    );
  }

  convertToCSV(objArray): string {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';


    for (const arr of array) {
      if (arr) {
        let line = '';
        console.log(arr);
        for (const i in arr) {
          if (arr.hasOwnProperty(i)) {
            if (line !== '') {
              line += ',';
            }

            line += arr[i];
          }
        }

        str += line + '\r\n';
      }
    }

    return str;
  }

  exportCSVFile(headers, items, fileTitle): void {
    if (headers) {
      items.unshift(headers);
    }

    const jsonObject = JSON.stringify(items);
    const csv = this.convertToCSV(jsonObject);

    const exportedFilename = fileTitle + '.csv' || 'export.csv';

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  flatten(items: object[]): object[] {
    console.log(items);
    return items.map((item) => {
      return flat(item);
    });
  }

  createHeaders(obj: object): object {
    const headers = {};
    for (const key in obj) {
      if (key) {
        headers[key] = key;
      }
    }

    return headers;
  }
}
