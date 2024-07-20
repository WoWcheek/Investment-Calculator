import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private investmentsService = inject(InvestmentsService);

  annualInvestments = computed(() => this.investmentsService.resultData());
}
