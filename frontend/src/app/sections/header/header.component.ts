import { ChangeDetectorRef, Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ContactformComponent } from '../contactform/contactform.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  documentIcon: string = 'assets/logo/file.svg';
  contactIcon: string = 'assets/logo/contact-mail.svg';
  linkedinIcon: string = 'assets/logo/social-linkedin.svg';
  githubIcon: string = 'assets/logo/social-github.svg';
  menuHidden = true;


  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef ) {}

  openContactDialog() {
    this.dialog.open(ContactformComponent, {
      width: '500px',
    }).afterOpened().subscribe(() => {
      this.cdr.detectChanges();
    });
  }
 

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    console.log(this.menuHidden)
  }
  
}
