import { Component, OnInit, Input } from '@angular/core';
import { LinechartComponent } from '../linechart/linechart.component'
import { BarchartComponent } from '../barchart/barchart.component'
import { PiechartComponent } from '../piechart/piechart.component'
import { PolarchartComponent } from '../polarchart/polarchart.component'
import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ITypeChart } from '../../multiselect.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-darshboard',
  templateUrl: './darshboard.component.html',
  styleUrls: ['./darshboard.component.css']
})
export class DarshboardComponent implements OnInit {
  disable = false;
  line_ChartView: any;
  bar_ChartView: any;
  pie_ChartView: any
  polar_ChartView: any;
  @Input() title: any;
  @Input() DashboardStore: any
  disabled = false;
  PieChart: ITypeChart = { Data: [], Labels: [] };
  constructor() { Chart.register(...registerables); }

  dropdownList = [
    { id: 1, name: "Energy supply", data: 11 },//, isDisabled: this.disabled },
    { id: 2, name: "Extractive industry", data: 16 },
    { id: 3, name: "Chemicals", data: 7 },
    { id: 4, name: "Food and drink", data: 6 },
    { id: 5, name: "Iron and steel", data: 66 },
    { id: 6, name: "Non-ferrous metal", data: 34 },
    { id: 7, name: "Non-metallic minerals", data: 4 },
    { id: 8, name: "Other manufacturing", data: 8 }
  ];

  selectedItems = [
    { id: 1, name: 'Energy supply' }
  ];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'data',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 1,
    allowSearchFilter: false,
  };
  onItemSelect(item: any) {
    this.addItem(item?.name, item?.data);
    this.disable = true;
  }
  addItem(lable: string, data: number) {
    this.polar_ChartView.labels.push(lable);
    this.polar_ChartView.datasets[0].data.push(data)
    if (this.polar_ChartView.datasets[0].data && this.polar_ChartView.datasets[0].data.indexOf(data) === -1) {
      this.polar_ChartView.datasets[0].data.push(data)
    }
    if (this.polar_ChartView.labels && this.polar_ChartView.labels.indexOf(lable) === -1) {
      this.polar_ChartView.labels.push(lable);
    }
    this.polar_ChartView.update();
  }

  onSelectAll(items: any) {


  }
  onItemDeSelect(item: any) {
    this.addItem(item?.name, item?.data);
  }
  onDropDownClose(item: any) {
  }
  callChild(val: number): void {

  }
  selected: any;
  ngOnInit(): void {
    // this.polar_ChartView = {
    //   labels: [

    //     'Blue'
    //   ],
    //   datasets: [{
    //     label: 'My First Dataset',
    //     data: [11],
    //     backgroundColor: [
    //       'yellow',
    //       'rgb(75, 192, 192)',
    //       'rgb(255, 205, 86)',
    //       'rgb(201, 203, 207)',
    //       'rgb(54, 162, 235)',
    //       'Green',
    //     'Yellow',
    //     'Grey',
    //     'Blue'
    //     ]
    //   }]
    // }


    this.polar_ChartView = {
      labels: [
        "Energy supply",
        "Extractive industry",
        "Chemicals",
        "Food and drink",
        "Iron and steel",
        "Non-ferrous metal",
        "Non-metallic minerals",
        "Other manufacturing",
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 20, 17, 33, 14, 19, 53, 66],
        backgroundColor: [
          'yellow',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'green',
          'pink',
          'gray',
          'lemon'
        ]
      }]
    }
    this.pie_ChartView = {
      labels: [
        "Energy supply",
        "Extractive industry",
        "Chemicals",
        "Food and drink",
        "Iron and steel",
        "Non-ferrous metal",
        "Non-metallic minerals",
        "Other manufacturing",
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 20, 17, 33, 14, 19, 53, 66],
        backgroundColor: [
          'yellow',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'green',
          'pink',
          'gray',
          'lemon'
        ],
        hoverOffset: 4
      }]
    };

    this.bar_ChartView = {
      datasets: [{
        label: 'Current Value',
        data: [3, 20, 20, 50],
        backgroundColor: "rgb(115 185 243 / 99%)",
        borderColor: "#007ee7",
      },
      {
        label: 'Invested Amount',
        data: [3, 20, 34, 20, 80],
        backgroundColor: "#47a0e8",
        borderColor: "#007ee7",
      }],
      labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
    };
    this.line_ChartView = {
      datasets: [{
        label: 'Current Vallue',
        data: [0, 20, 20, 50],
        backgroundColor: "rgb(30 185 243 / 65%)",
        borderColor: "#007ee7",
        fill: true,
      },
      {
        label: 'Invested Amount',
        data: [0, 20, 34, 0, 80],
        backgroundColor: "#47a0e8",
        borderColor: "#007ee7",
        fill: true,
      }],
      labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
    };;
    console.log(this.DashboardStore);
  }

}
