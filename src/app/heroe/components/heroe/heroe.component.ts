import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
    public nombre: string= "Vegetta";
    public edad: number = 45;
    public planeta: string = "Tierra";
}
