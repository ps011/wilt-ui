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
        // this.alerts.push({
        //     id: 1,
        //     type: 'success',
        //     strong: 'Well done!',
        //     message: 'You successfully read this important alert message.',
        //     icon: 'ui-2_like'
        // }, {
        //     id: 2,
        //     strong: 'Heads up!',
        //     type: 'info',
        //     message: 'This is an info alert',
        //     icon: 'travel_info'
        // }, {
        //     id: 3,
        //     type: 'warning',
        //     strong: 'Warning!',
        //     message: 'This is a warning alert',
        //     icon: 'ui-1_bell-53'
        // }, {
        //     id: 4,
        //     type: 'danger',
        //     strong: 'Oh snap!',
        //     message: 'This is a danger alert',
        //     icon: 'objects_support-17'
        // });
    }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
