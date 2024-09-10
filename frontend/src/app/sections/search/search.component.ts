import { CommonModule, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgZone } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { ContactformComponent } from '../contactform/contactform.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent {
  isChatOpen = false;
  userInput: string = '';
  messages: { text: string, isBot: boolean }[] = [];

  constructor(private router: Router, private viewportScroller: ViewportScroller, private dialog: MatDialog) {}


  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  handleInput() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, isBot: false });
      this.processInput(this.userInput.trim().toLowerCase());
      this.userInput = '';
    }
  }

  processInput(input: string) {
    let response = this.generateResponse(input);
  
    if (!response.includes('Sorry')) {
      // If the response is handled by generateResponse, don't process further
      this.messages.push({ text: response, isBot: true });
      return;
    }
  
    switch (true) {
      case /profile|personal|bio|about/.test(input):
        this.scrollToSection('profile');
        response = 'Navigating to the profile section...';
        break;
      case /qualification|education|background|academics/.test(input):
        this.scrollToSection('qualification');
        response = 'B.E for more info look into Qualification section';
        break;
      case /skills|abilities|competence|expertise/.test(input):
        this.scrollToSection('skills');
        response = 'Navigating to the skills section...';
        break;
      case /project|work|portfolio|assignments/.test(input):
        this.scrollToSection('project');
        response = 'Navigating to the project section...';
        break;
      case /contact|mail|message|get in touch/.test(input):
        this.openContactDialog();
        response = 'Opening contact form...';
        break;
      default:
        response = `I DIDN'T GET IT, but you can contact me at: vanashree.ravishankar@gmail.com for further assistance.`;
        break;
    }
  
    this.messages.push({ text: response, isBot: true });
  }
  
  
  openContactDialog() {
    const dialogRef = this.dialog.open(ContactformComponent, {
      width: '500px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(() => {
      const response =  "Contact form closed.\nFor further inquiries, you can reach me at:\nvanashree.ravishankar@gmail.com";
      this.messages.push({ text: response, isBot: true });
    });
  }

  scrollToSection(sectionId: string) {
    console.log(`Scroll to: ${sectionId}`)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element not found:', sectionId);
    }
  }

  generateResponse(input: string): string {
    if (input.includes('hello') || input.includes('hi') || input.includes('hii')) {
      return 'Hello! How can I assist you today? You can type "profile", "qualification", "skills", "contact" or "project" to navigate to those sections.';
    } else if (input.includes('help')) {
      return 'Sure, I am here to help! You can navigate to different sections by typing "profile", "qualification", "skills", "contact" or "project".';
    } else if (input.includes('thanks') || input.includes('thank you')) {
      return 'You are welcome! Let me know if there is anything else I can help with.';
    } else {
      return 'Sorry, I did not understand that. Please type "profile", "qualification", "skills", "contact" or "project".';
    }
  }
}