import { Component, EventEmitter, Output } from '@angular/core';
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
  duration = '10';
  expectedReturn = '5';
  annualInvestment = '0';
  initialInvestment = '0';

  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    const data: InvestmentInput = {
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment,
      initialInvestment: +this.initialInvestment,
    };
    this.calculate.emit(data);
  }
}
