import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  roles: string[] = [
    'Frontend developer',
    'Web developer',
    'Fullstack developer'
  ];
  currentRole: string = this.roles[0];
  private intervalId: any;
  

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    console.log('ProfileComponent initialized');
    this.startRoleRotation();
  }

  ngOnDestroy(): void {
    console.log('ProfileComponent destroyed');
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startRoleRotation(): void {
    this.ngZone.runOutsideAngular(() => {
      let index = 0;
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          index = (index + 1) % this.roles.length;
          this.currentRole = this.roles[index];
          console.log('Role changed to:', this.currentRole);
        });
      }, 5000); // Temporarily set to 5 seconds for testing
    });
  }
  showRightSide = false; // Control for toggling the right-side on small screens

  toggleRightSide() {
    this.showRightSide = !this.showRightSide;
  }
}