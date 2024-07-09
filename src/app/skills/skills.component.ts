import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 90 },
    { name: 'JavaScript', progress: 85 },
    { name: 'Bootstrap', progress: 95 },
    { name: 'Tailwind', progress: 95 },
    { name: 'Angular Material', progress: 90 },
    { name: 'Angular', progress: 90 },
    { name: 'React', progress: 80 },
    { name: 'NextJs', progress: 80 },
    { name: 'GitHub', progress: 90 }
  ];
}
