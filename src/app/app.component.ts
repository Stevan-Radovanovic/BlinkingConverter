import { Component } from '@angular/core';
import * as flat from 'flat';
import * as xlsx from 'json-as-xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'convertor';

  constructor() {}

  onClickConvertCsv() {
    const flattenedArray = this.flatten(this.mockData.items);
    this.exportCSVFile(this.mockData.headers, flattenedArray, 'Blinking');
  }

  onClickConvertXlsx() {
    const flattenedArray = this.flatten(this.mockData.items);

    const settings = {
      sheetName: 'Blinking JSON',
      fileName: 'Blinking',
      extraLength: 3,
      writeOptions: {},
    };
    xlsx(this.mockData.xslxHeaders, flattenedArray, settings, true);
  }

  flatten(items: Object[]) {
    const flattenedItems = items.map((item) => {
      return flat(item);
    });
    return flattenedItems;
  }

  convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (let i = 0; i < array.length; i++) {
      var line = '';
      for (const index in array[i]) {
        if (line != '') line += ',';

        line += array[i][index];
      }

      str += line + '\r\n';
    }

    return str;
  }

  exportCSVFile(headers, items, fileTitle) {
    if (headers) {
      items.unshift(headers);
    }

    const jsonObject = JSON.stringify(items);
    const csv = this.convertToCSV(jsonObject);

    const exportedFilename = fileTitle + '.csv' || 'export.csv';

    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportedFilename);
    } else {
      let link = document.createElement('a');
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

  mockData = {
    xslxHeaders: [
      { label: 'Phone Model', value: 'model' },
      { label: 'Chargers', value: 'chargers' },
      { label: 'Cases', value: 'cases' },
      { label: 'Earphones', value: 'earphones' },
      { label: 'Scratched', value: 'scratched' },
      { label: 'Serial Number', value: 'config.serialNo' },
      { label: 'Barcode', value: 'config.barcode' },
    ],

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
}
