import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedSkill = 'coding';
  
  codingSkills = [
    { name: 'Angular', description: 'Utilized for building the frontend of the web application', svgPath: 'assets/logo/angular.svg' },
    { name: 'Node.js', description: 'Implemented as the backend framework to manage server-side logic', svgPath: 'assets/logo/nodejs.svg' },
    { name: 'MongoDB', description: 'Used for storing and managing the application data', svgPath: 'assets/logo/mongodb.svg' },
    { name: 'HTML', description: 'Structured the layout and content of the web pages', svgPath: 'assets/logo/html5.svg' },
    { name: 'CSS', description: 'Applied styling and design to enhance the visual presentation', svgPath: 'assets/logo/css3.svg' },
    { name: 'JavaScript', description: 'Enabled dynamic content and interactivity on the website', svgPath: 'assets/logo/javascript-js-square.svg' }
    // Add more coding skills as needed
  ];
  softSkills = [
    { name: 'TeamWork', description: 'I contribute effectively to team dynamics, enhancing collaboration and driving collective success', svgPath: 'assets/logo/teams.svg' },
    { name: 'Communication', description: 'My communication skills ensure clear, concise, and impactful exchanges in any setting', svgPath: 'assets/logo/comments.svg' },
    { name: 'Time Management', description: 'Efficiently prioritizes tasks to meet deadlines with precision', svgPath: 'assets/logo/clock.svg' },
    { name: 'Adaptability', description: 'Thrives in dynamic environments and quickly adjusts to new challenges', svgPath: 'assets/logo/adaptive.svg' },
    { name: 'Creativity', description: 'Consistently delivers imaginative and elegant solutions', svgPath: 'assets/logo/creativity-visualize-visual-imagine-svgrepo-com.svg' }
    // Add more soft skills as needed
  ];
  microSoftSkills = [
    { name: 'PowerPoint', description: 'I design compelling presentations that effectively communicate key messages and captivate audiences', svgPath: 'assets/logo/microsoft-powerpoint.svg' },
    { name: 'MS Word', description: 'I leverage my expertise in MS Word to produce polished, professional documents efficiently', svgPath: 'assets/logo/microsoft-word.svg' },
    { name: 'MS Excel', description: 'I possess a strong command over Excel, transforming data into actionable insights', svgPath: 'assets/logo/excel.svg' }
    // Add more Microsoft skills as needed
  ];
  
  selectSkill(skill: string) {
    this.selectedSkill = skill;
  }
}
