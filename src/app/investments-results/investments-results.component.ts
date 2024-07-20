import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import type { InvestmentsResult } from '../investment-result.model';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  @Input() data?: InvestmentsResult[];
}
