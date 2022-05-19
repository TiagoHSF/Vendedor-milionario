import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-first-step",
  templateUrl: "./first-step.component.html",
  styleUrls: ["./first-step.component.scss"],
})
export class FirstStepComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  compra() {
    window.open("https://sun.eduzz.com/1110539?a=64232058");
  }

  navigate() {
    this.route.navigate([""]);
  }
}
