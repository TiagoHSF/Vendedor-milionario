import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  compra() {
    window.open('https://sun.eduzz.com/1110539?a=64232058');
  }
}
