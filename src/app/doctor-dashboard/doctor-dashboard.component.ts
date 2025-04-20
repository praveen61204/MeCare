import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({

  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DashboardComponent {
  doctorName: string = 'Praveenkumar';
  activeLink: string = 'dashboard';
  showNotifications: boolean=false;
  notifications: any[] = [
    { message: 'New patient appointment scheduled', time: '10:30 AM' },
    { message: 'Medical record updated for Robert Wilson', time: '09:15 AM' },
    { message: 'Reminder: Check Willie Jennings\'s next treatment', time: '08:00 AM' },
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  setActiveLink(link: string) {
    this.activeLink = link;
    if (link === 'dashboard') this.router.navigate(['/doctor']);
    else if (link === 'patients') this.router.navigate(['/doctor/patients']);
    else if (link === 'appointments') this.router.navigate(['/doctor/appointments']);
    else if (link === 'prescriptions') this.router.navigate(['/doctor/prescriptions']);
    else if(link=== 'profile') this.router.navigate(['/doctor/profile']);
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}