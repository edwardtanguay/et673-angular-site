import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-page-employees',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './page-employees.component.html',
	styleUrl: './page-employees.component.scss',
})
export class PageEmployeesComponent {
	employees: IEmployee[] = [];
	searchText: string = '';

	constructor() {
		(async () => {
			const response = await axios.get(
				'https://edwardtanguay.vercel.app/share/employees.json'
			);
			this.employees = response.data;
		})();
	}
}
