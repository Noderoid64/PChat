import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Profile } from '../../../../model/profile.model';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent {

  @Input() public profiles: Profile[] = [
    {nick: 'Noderoid'} as Profile,
    {nick: 'Masha'} as Profile,
    {nick: 'Misha'} as Profile,
    {nick: 'Viktor'} as Profile,
    {nick: 'Liza'} as Profile,
    {nick: 'Zhekos'} as Profile,
    {nick: 'Keksik'} as Profile,
    {nick: 'Noderoid'} as Profile,
    {nick: 'Masha'} as Profile,
    {nick: 'Misha'} as Profile,
    {nick: 'Viktor'} as Profile,
    {nick: 'Liza'} as Profile,
    {nick: 'Zhekos'} as Profile,
    {nick: 'Keksik'} as Profile,
  ];

  @Output() private selectProfile = new EventEmitter();

  constructor() { }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.profiles, event.previousIndex, event.currentIndex);
  }

}
