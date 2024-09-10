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
     links: [{ url: 'https://mean-crm-frontend.vercel.app/', text: 'Demo'},
      {url: 'https://github.com/Vanashreeshankar/MEAN-CRM-WEB', text: 'Learn More'}
    ] 
    },
    { title:'Blog Website', src: 'assets/video2.mp4', description: 'This responsive blog website, built with HTML, CSS, and JavaScript, offers various blog categories for users to explore. Users can also contribute their own content and easily get in touch through the site.', links:[] },
    // Add more videos as needed
  ];

  projects = [
    { name: 'User Authentication', description: 'Seamless login and logout functionality in a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/MEANstackLogin' },
    { name: 'Admin Dashboard', description: 'Efficient UI for performing CRUD operations in a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/MEANstackAdmin' },
    { name: 'Blog Creation', description: 'Create and manage engaging blog content within a MEAN stack application.', link: 'https://github.com/Vanashreeshankar/blog-website' },
    // Add more projects as needed
  ];
}