import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.scss"],
})
export class ContatoComponent implements OnInit {
  contatos: string[] = [
    "WhatsApp : (35) 98817-7898",
    "Email : tiagohs.hotmart@gmail.com",
    "Instagram : @tiagohsilva_02",
  ];
  constructor() {}

  ngOnInit(): void {}
}
