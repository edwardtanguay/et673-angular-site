import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
	@Input() title = '(title)';
	@Input() body = '(body)';
	@Input() author = '(author)';
	dateOfInfo = 'Dec 23, 2022';
}
