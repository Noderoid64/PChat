import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../../model/profile.model';
import { ProfileWebService } from 'app/core/services/profile-web.service';


@Component({
  selector: 'app-add-profile-dialog',
  templateUrl: './add-profile-dialog.component.html',
  styleUrls: ['./add-profile-dialog.component.scss']
})
export class AddProfileDialogComponent {

  // public profiles = new Array<Profile>();
  displayedColumns: string[] = ['nick', 'actions'];
  public profiles = [
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

  constructor(private profileWebService: ProfileWebService) { }

}
