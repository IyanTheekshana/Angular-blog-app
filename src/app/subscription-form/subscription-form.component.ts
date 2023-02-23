import { Component } from '@angular/core';
import { ISubs } from '../models/subs';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent {
  isSubed: boolean = false;
  constructor(private subService: SubscribersService) {}
  onSubmit(data: any) {
    const subData: ISubs = { name: data.name, email: data.email };
    this.subService.addSubs(subData);
    this.isSubed = true;
  }
}
