import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public profileUsername = '';

  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.subscribeForCurrentProfile();
  }

  onRedirectToLogin() {
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return ProfileService.isUserLogged();
  }

  onLogout() {
    ProfileService.logout();
    this.router.navigate(['/']);
  }

  subscribeForCurrentProfile() {
    this.profileService.getCurrentProfil().subscribe((profile: string) => {
      this.profileUsername = profile;
    });
  }
}
