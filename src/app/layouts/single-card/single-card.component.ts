import { Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevexpressModule } from 'src/app/devexpress/devexpress.module';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent {
  constructor() { }
}

@NgModule({
  imports: [ CommonModule, DevexpressModule ],
  exports: [ SingleCardComponent ],
  declarations: [ SingleCardComponent ]
})
export class SingleCardModule { }
