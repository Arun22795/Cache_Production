import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug"
  ];
  public barChartType: ChartType = "line";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [110, 259, 380, 281, 256, 155, 140, 370], label: "Test A" },
    { data: [328, 148, 240, 319, 286, 427, 190, 160], label: "Test B" },
    { data: [250, 310, 450, 379, 146, 450, 310, 244], label: "Test C" }
  ];


  constructor() { }

  ngOnInit(): void {

  }

  onBar() {
    this.barChartType = 'bar';
  }
  onLine() {
    this.barChartType = 'line';
  }

}
