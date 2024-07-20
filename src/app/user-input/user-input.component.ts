import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentsService } from '../investments.service';
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

  private investmentsService = inject(InvestmentsService);

  onSubmit() {
    const data: InvestmentInput = {
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
      initialInvestment: +this.initialInvestment(),
    };
    this.investmentsService.calculateInvestmentResults(data);

    this.resetInputs();
  }

  private resetInputs() {
    this.duration.set('10');
    this.expectedReturn.set('5');
    this.annualInvestment.set('0');
    this.initialInvestment.set('0');
  }
}
