import { Component, OnInit } from '@angular/core';
import { toXML } from 'jstoxml';

@Component({
  selector: 'app-json-to-xml',
  templateUrl: './json-to-xml.component.html',
  styleUrls: ['./json-to-xml.component.css'],
})
export class JsonToXmlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickConvertXml() {
    const xml = toXML(this.mockData.items);
    console.dirxml(xml);
  }

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
