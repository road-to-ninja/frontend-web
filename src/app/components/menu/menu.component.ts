import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  public isUserLogged = false;
  public isMenuOpened = false;

  constructor(private router: Router, private profileService: ProfileService) {
    this.isUserLogged = ProfileService.isUserLogged();
  }

  ngOnInit() {
  }

  onRedirectToLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    ProfileService.logout();
    this.router.navigate(['/']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  getCurrentUserNanem() {
    if (ProfileService.getCurrentUserToken()) {
      return ProfileService.getCurrentUserToken().name;
    }
    return '';

  }

  toggleMenuStatus() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
