import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(public authService: AuthService) {}

  onLogin(event: Event) {
    event.preventDefault(); // Empêche le rechargement de la page
    if (this.username && this.password) {
      this.authService.login(this.username, this.password);
        this.username = '';
        this.password = '';
    }
  }
  
  onLogout() {
    this.authService.logout();}
}
