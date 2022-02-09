import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
    title = '';
    @Input() line_ChartView:any;
    DashboardStore:number[]=[];
    canvas: any;
    ctx: any;
    constructor(){
      Chart.register(...registerables);
    }
    @ViewChild('linechart') mychart:any;
    ngOnInit(): void {
      this.title = 'charts';
      console.log(this.line_ChartView);
     // this.data = 'hello world';
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
          type: 'line',
          data: this.line_ChartView
          // data: {
          //     datasets: [{
          //         label: 'Current Vallue',
          //         data: [0, 20, 20, 50],
          //         backgroundColor: "rgb(30 185 243 / 65%)",
          //         borderColor: "#007ee7",
          //         fill: true,
          //     },
          //     {
          //       label: 'Invested Amount',
          //       data: [0, 20, 34, 0, 80],
          //       backgroundColor: "#47a0e8",
          //       borderColor: "#007ee7",
          //       fill: true,
          //   }],
          //     labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
          // },



          // options: {
          //   indexAxis: 'y',
          //   scales: {
          //     x: {
          //       beginAtZero: true,
          //       max:70
                
          //     },
          //     y:{
          //       beginAtZero: true,
          //       max:60,
                
          //     }
          //   }
          // }

      });
      }
    }
  