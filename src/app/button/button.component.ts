import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  EstaDisabilitado: boolean = true;
  cor: string = "blue";


  constructor() { }

  ngOnInit(): void {
    setInterval(this.trocaCor, 1000);
  }


  interruptor() {
    this.EstaDisabilitado = !this.EstaDisabilitado;

  }

  trocaCor() {

    if (this.cor === "blue") {
      this.cor = "red";
    } else {
      this.cor = "blue";
    }
  }

  trocaCorAuto() {

    if (this.cor === "blue") {
      this.cor = "red";
    } else {
      this.cor = "blue";
    }

    console.log("estou aqui")
    setTimeout(this.trocaCorAuto, 1000);
    console.log("passei o timeout");
  }

  exibirId(id: string) {
    console.log(id);
  }


}
