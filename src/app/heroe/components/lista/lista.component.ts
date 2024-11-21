import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public lista = ["Tomates", "Cebollas", "Pimientos", "Ajo", "Perejil"];

  public getLista(): string[] {
    return this.lista;
  }
}
