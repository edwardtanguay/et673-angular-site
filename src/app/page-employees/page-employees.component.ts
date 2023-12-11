import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';

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
		this.employees = [
			{
				firstName: 'Frank',
				lastName: 'Holander',
				notes: "These are Frank's notes.",
			},
			{
				firstName: 'Selma',
				lastName: 'Schmidt',
				notes: "These are Selma's notes.",
			},
			{
				firstName: 'Angie',
				lastName: 'Ramadesh',
				notes: "These are Angie's notes.",
			},
		];
	}
}
