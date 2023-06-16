import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    ano!: Number;
    constructor(public layoutService: LayoutService) {
        let data = new Date;
        this.ano = data.getFullYear()
    }
}
