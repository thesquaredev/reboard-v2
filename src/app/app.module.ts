import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { IssuesModule } from "./issues/issues.module";
import { AboutModule } from "./about/about.module";
import { SharedState } from "./shared/store/shared.state";
import { HttpClientModule } from "@angular/common/http";
import { HomeState } from "./home/store/home.state";
import { IssuesState } from "./issues/store/issues.state";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HomeModule,
    IssuesModule,
    AboutModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,

    NgxsModule.forRoot([SharedState, HomeState, IssuesState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
