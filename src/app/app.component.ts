import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
