import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-to-xml',
  templateUrl: './json-to-xml.component.html',
  styleUrls: ['./json-to-xml.component.css'],
})
export class JsonToXmlComponent implements OnInit {
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

  OBJtoXML(obj): string {
    let xml = '';
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        xml += obj[prop] instanceof Array ? '' : '<' + prop + '>';
        if (obj[prop] instanceof Array) {
          for (const array in obj[prop]) {
            if (obj[prop].hasOwnProperty(array)) {
              xml += '<' + prop + '>';
              xml += this.OBJtoXML(new Object(obj[prop][array]));
              xml += '</' + prop + '>';
            }
          }
        } else if (typeof obj[prop] === 'object') {
          xml += this.OBJtoXML(new Object(obj[prop]));
        } else {
          xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : '</' + prop + '>';
      }
    }
    xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml;
  }

  onClickConvertXml(): void {
    let xml = '';
    xml += '<blinking-xml>';
    xml += this.OBJtoXML(this.mockData.items);
    xml += '</blinking-xml>';

    const blob = new Blob([xml], { type: 'text/xml;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, 'Blinking');
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'Blinking');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
}
