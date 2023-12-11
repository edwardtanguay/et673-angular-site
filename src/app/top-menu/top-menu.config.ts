import { Routes } from "@angular/router";
import { PageHomeComponent } from "../page-home/page-home.component";
import { PageInfoComponent } from "../page-info/page-info.component";

export const routerConfig: Routes = [
	{
		path: 'home',
		component: PageHomeComponent
	},
	{
		path: 'info',
		component: PageInfoComponent
	}
]
