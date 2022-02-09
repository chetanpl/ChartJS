import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  title = '';
  data = '';
  DashboardStore:number[]=[];
  canvas: any;
  ctx: any;
  @Input() bar_ChartView:any
  constructor(){
    Chart.register(...registerables);
  }
  @ViewChild('barchart') mychart:any;
  ngOnInit(): void {
    this.title = 'charts';
    this.data = 'hello world';
   // const ctx=document.getElementById("mychart"); 
  }
  boarnNewDashboard(){
    let item= this.DashboardStore.length+1
    this.DashboardStore.push(item);
  }
    ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement; 
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'bar',
        data:this.bar_ChartView
        // data: {
        //     datasets: [{
        //         label: 'Current Value',
        //         data: [3, 20, 20, 50],
        //         backgroundColor: "rgb(115 185 243 / 99%)",
        //         borderColor: "#007ee7",
        //     },
        //     {
        //       label: 'Invested Amount',
        //       data: [3, 20, 34, 20, 80],
        //       backgroundColor: "#47a0e8",
        //       borderColor: "#007ee7",
        //   }],
        //     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
        // }
    });
    }
  }

