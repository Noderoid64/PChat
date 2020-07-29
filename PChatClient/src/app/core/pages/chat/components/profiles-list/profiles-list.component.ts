import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../../../model/profile.model';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent {

  @Input() private profiles: Profile[];

  @Output() private selectProfile = new EventEmitter();

  constructor() { }

}
