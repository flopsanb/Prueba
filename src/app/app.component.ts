import { Component } from '@angular/core';
import { HeroeModule } from './heroe/components/heroe.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DI_44_LopezFrancisco';
}