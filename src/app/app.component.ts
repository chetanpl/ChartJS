import { Component } from '@angular/core';
import { DarshboardComponent } from './Dashboard/darshboard.component'
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  data = '';
  DashboardStore:number[]=[];
  constructor(){
  }
  ngOnInit(): void {
    this.title = 'charts';
    this.data = 'hello world';
  }
  boarnNewDashboard(){
    let item= this.DashboardStore.length+1
    this.DashboardStore.push(item);
  }
  onOptionsSelected(value:string){
    console.log("the selected value is " + value);
}
  }

