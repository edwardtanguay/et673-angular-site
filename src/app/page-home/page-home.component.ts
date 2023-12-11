import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

@Component({
	selector: 'app-page-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './page-home.component.html',
	styleUrl: './page-home.component.scss',
})
export class PageHomeComponent {
	now = '2023-12-23 13:21:01';
}
