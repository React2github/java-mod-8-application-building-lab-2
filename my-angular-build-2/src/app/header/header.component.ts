
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponentComponent implements OnInit {
  activeUser = {
    firstName: "Maria",
  };

  constructor() {}

  ngOnInit(): void {}
}
