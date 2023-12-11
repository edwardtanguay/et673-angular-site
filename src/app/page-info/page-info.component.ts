import { Component } from '@angular/core';
import { InfoBoxComponent } from "../info-box/info-box.component";

@Component({
    selector: 'app-page-info',
    standalone: true,
    templateUrl: './page-info.component.html',
    styleUrl: './page-info.component.scss',
    imports: [InfoBoxComponent]
})
export class PageInfoComponent {

}
