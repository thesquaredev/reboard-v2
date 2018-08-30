import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { ChartsComponent } from "./components/charts/charts.component";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { StatsComponent } from "./components/stats/stats.component";

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NgxChartsModule
  ],
  declarations: [HomeComponent, ChartsComponent, StatsComponent],
  exports: [HomeComponent, ChartsComponent]
})
export class HomeModule {}
