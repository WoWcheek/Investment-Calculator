import { Component, computed, inject } from '@angular/core';

import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-investments-results',
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  private investmentsService = inject(InvestmentsService);

  annualInvestments = computed(() => this.investmentsService.resultData());
}
