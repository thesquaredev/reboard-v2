export interface ChartData {
  name: string;
  value: number;
}

export interface LineChartData {
  name: string;
  series: ChartData[];
}
