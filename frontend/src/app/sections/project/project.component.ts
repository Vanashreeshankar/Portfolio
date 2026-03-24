import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  videos = [
    { title:'CRM Application', src: 'assets/crm.mp4', description: 'This CRM application, built with the MEAN stack, features comprehensive CRUD functionality for both users and admins. In addition to standard data management, the application allows seamless communication between users and admins through a built-in messaging system. Admins can manage messages directly from a dedicated panel, ensuring efficient oversight. For a full demonstration of the application capabilities, you can check out the demo.',
     links: [{ url: 'https://crm-frontend-website.vercel.app', text: 'Demo'},
      {url: 'https://github.com/Vanashreeshankar/MEAN-CRM-Website', text: 'Learn More'}
    ] 
    },
    { title:'Visual Node Pipeline Builder', src: 'assets/screenrec.mp4', description: 'Developed an interactive workflow builder that allows users to create and manage data pipelines using a visual node-based interface. Implemented dynamic node linking, real-time state updates, and a modular architecture to ensure scalability and ease of use. This project demonstrates strong frontend logic, state management, and user-centric design principles.',
     links:[{url: 'https://github.com/Vanashreeshankar/visual-node-pipeline-builder', text: 'Learn More'}] },
    // Add more videos as needed
  ];

  projects = [
    { name: 'User Authentication', description: 'Seamless login and logout functionality in a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/MEANstackLogin' },
    { name: 'Admin Dashboard', description: 'Efficient UI for performing CRUD operations in a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/MEANstackAdmin' },
    { name: 'Blog Creation', description: 'Create and manage engaging blog content within a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/blog-website' },
    // Add more projects as needed
  ];
}
