import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { PageEmployeesComponent } from './page-employees/page-employees.component';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{ path: 'home', component: PageHomeComponent },
	{ path: 'info', component: PageInfoComponent },
	{ path: 'employees', component: PageEmployeesComponent },
	{ path: '**', component: Page404Component },
];
