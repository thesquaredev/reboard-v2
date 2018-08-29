import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { ChangeRepo } from "./shared/store/shared.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new ChangeRepo("angular/angular"));
  }
}
