import { Injectable, signal } from '@angular/core';

import type { InvestmentInput } from './investment-input.model';
import type { InvestmentsResult } from './investment-result.model';

@Injectable({ providedIn: 'root' })
export class InvestmentsService {
  resultData = signal<InvestmentsResult[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentInput) {
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

    this.resultData.set(annualData);
  }
}
