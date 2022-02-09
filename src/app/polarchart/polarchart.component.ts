import { Component, Input, OnInit,ViewChild,OnChanges,  AfterViewInit, SimpleChanges, DoCheck } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-polarchart',
  templateUrl: './polarchart.component.html',
  styleUrls: ['./polarchart.component.css']
})
export class PolarchartComponent implements OnInit, AfterViewInit,OnChanges, DoCheck {
  canvas: any;
  ctx: any;
  @Input() polar_ChartView:any;
constructor() { Chart.register(...registerables);
}
@ViewChild('polarArea') polarArea:any;
ngOnInit(): void {
  
}
ngDoCheck(): void {
    
}
  ngAfterViewInit() {
      this.canvas = this.polarArea.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      new Chart(this.ctx, {
        type: 'polarArea',
          data :  this.polar_ChartView
        })


       
    
  }
  muva:any;
ngOnChanges(changes: SimpleChanges): void {
    this.muva=JSON.stringify(this.polar_ChartView.labels);
    if(changes['polar_ChartView'].firstChange){
      this.polar_ChartView.datasets=changes['polar_ChartView'].currentValue.datasets;
    this.polar_ChartView.labels=changes['polar_ChartView'].currentValue.datasets.label
     new Chart(this.ctx, {
        type: 'polarArea',
          data :  this.polar_ChartView.update()
        })
      }
}
}

