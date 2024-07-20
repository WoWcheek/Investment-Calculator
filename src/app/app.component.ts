import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import type { InvestmentInput } from './investment-input.model';
import type { InvestmentsResult } from './investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  calculatedData?: InvestmentsResult[];

  onCalculateInvestmentResults(data: InvestmentInput) {
    const { duration, expectedReturn, annualInvestment, initialInvestment } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      const data: InvestmentsResult = {
        year: year,
        totalInterest: totalInterest,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };
      annualData.push(data);
    }

    this.calculatedData = annualData;
  }
}
