import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    FormComponent
  ]
})
export class AppComponent {}
