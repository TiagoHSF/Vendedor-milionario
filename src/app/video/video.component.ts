import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  compra() {
    window.open('https://sun.eduzz.com/1110539?a=64232058');
  }
}
