import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContactformComponent } from './sections/contactform/contactform.component';

import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './sections/header/header.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { ProjectComponent } from './sections/project/project.component';
import { QualComponent } from './sections/qual/qual.component';
import { ExpComponent } from './sections/exp/exp.component'; 
import { SkillsComponent } from './sections/skills/skills.component';
import { SearchComponent } from './sections/search/search.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FooterComponent } from './sections/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //BrowserAnimationsModule,
    RouterOutlet,
    ContactformComponent,
    CommonModule,
    MaterialModule,
    HeaderComponent,
    ProfileComponent,
    ProjectComponent,
    QualComponent,
     ExpComponent,
    SkillsComponent,
    SearchComponent,
   MatDialogModule,
   FooterComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: MatDialogRef,useValue: {} },
    { provide: MAT_DIALOG_DATA,useValue: {} }
]
})
export class AppComponent {
  title = 'Protfolio';
}
