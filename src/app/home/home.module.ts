import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { BoardComponent } from "./components/board/board.component";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CounterComponent } from "./components/counter/counter.component";

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
  declarations: [HomeComponent, BoardComponent, CounterComponent],
  exports: [HomeComponent, BoardComponent]
})
export class HomeModule {}
