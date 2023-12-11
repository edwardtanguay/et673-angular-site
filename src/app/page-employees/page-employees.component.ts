import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
	selector: 'app-page-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './page-employees.component.html',
	styleUrl: './page-employees.component.scss',
})
export class PageEmployeesComponent {
	employees: IEmployee[] = [];

	constructor() {
		(async () => {
			const response = await axios.get(
				'https://edwardtanguay.vercel.app/share/employees.json'
			);
			this.employees = response.data;
		})();
	}
}
