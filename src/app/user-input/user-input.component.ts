import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  duration = signal('10');
  expectedReturn = signal('5');
  annualInvestment = signal('0');
  initialInvestment = signal('0');

  calculate = output<InvestmentInput>();

  onSubmit() {
    const data: InvestmentInput = {
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
      initialInvestment: +this.initialInvestment(),
    };
    this.calculate.emit(data);
    this.resetInputs();
  }

  private resetInputs() {
    this.duration.set('10');
    this.expectedReturn.set('5');
    this.annualInvestment.set('0');
    this.initialInvestment.set('0');
  }
}
