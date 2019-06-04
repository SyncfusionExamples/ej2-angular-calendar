import { Component } from '@angular/core';
import { addClass } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/29/2017");
  public value: Date [] = [new Date ("05/16/2017"), new Date ("05/12/2017"), new Date ("05/22/2017"), new Date ("05/26/2017"), new Date ("05/20/2017")]  
  public multiselect: Boolean = true;
}
