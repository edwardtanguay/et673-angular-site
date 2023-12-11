import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NumtonamePipe } from '../../shared/numtoname.pipe';

@Component({
	selector: 'app-info-box',
	standalone: true,
	imports: [CommonModule, NumtonamePipe],
	templateUrl: './info-box.component.html',
	styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
	@Input() title = '(title)';
	@Input() body = '(body)';
	@Input() author = '(author)';
	@Input() status = '(status unknown)';
	@Input() highlight = '';

	dateOfInfo = 'Dec 23, 2022';
	statusColor = '';
	showDevInfo = false;
	highlighted = true;

	ngOnInit() {
		this.statusColor = this.status === 'success' ? 'lightgreen' : this.status === 'danger' ? 'tomato' : 'gray';
		this.highlighted = this.highlight === 'true';
	}

	handleShowDevInfoToggle = () => {
		this.showDevInfo = !this.showDevInfo;
	}
}
