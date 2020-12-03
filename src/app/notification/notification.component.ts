import { Input, Component } from '@angular/core';
import { Alert } from '../interfaces/alert.interface';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {
    @Input() public alerts: Array<Alert> = [];

    constructor() {
    }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
