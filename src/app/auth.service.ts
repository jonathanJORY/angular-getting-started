import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(username: string, password: string): boolean {
    this.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify({ username }));
    return true;
  }
  

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
