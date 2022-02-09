import { Component, OnInit,ViewChild,Input,AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit,AfterViewInit  {
  canvas: any;
    ctx: any;
    @Input() pie_ChartView:any
  constructor() { Chart.register(...registerables);
  }
  @ViewChild('pieChart') pieChart:any;
  ngOnInit(): void {
   // const ctx=document.getElementById("mychart"); 
  }
  ngAfterViewInit() {
      this.canvas = this.pieChart.nativeElement; 
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'pie',
          data : this.pie_ChartView})
    }
  }
