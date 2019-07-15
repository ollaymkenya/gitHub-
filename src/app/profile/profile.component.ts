import { Component, OnInit,ComponentFactory } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: string;
  profile: User;
  repos: Repo;
  constructor(private profileService: ProfileService) {
  }


  getProfile() {
    this.profileService.updateProfile(this.user);
    this.profileService.getProfileUser().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepo().subscribe(repos => {
      this.repos = repos;
    });
  }


  ngOnInit() {
    

}
