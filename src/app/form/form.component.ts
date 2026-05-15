import {Component, signal} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  initialInvestment = signal('')
  annualInvestment = signal('')
  expectedReturn = signal('5')
  duration = signal('10')

  onSubmit() {
    console.log('form submitted', this.initialInvestment(), this.annualInvestment(), this.expectedReturn(), this.duration());
  }
}
