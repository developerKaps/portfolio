import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  projects: any = [
    {
      name: 'Gameplan',
      description:
        'Game Plan is an advanced, yet intuitive platform for athletes, institutions, and employers.',
      imagePath: '../../assets/gameplan.webp',
      url: 'https://www.wearegameplan.com/',
    },
    {
      name: 'Openmoot',
      description:
        'OpenMoot is a debate platform designed as a dynamic space to allow passionate individuals to engage in insightful debates across a limitless range of topics.',
      imagePath: '../../assets/openmoot.jpeg',
      url: 'http://openmoot.com',
    },
    {
      name: 'Inclusion Pathways',
      description:
        'Inclusion Pathways was built for people with disabilities by an individual with disabilities.',
      imagePath: '../../assets/inclusionPathways.png',
      url: 'http://www.inclusionpathways.com/',
    },
    {
      name: 'kshatriya yuvak sangh',
      description:
        'Shri Kshatriya Yuvak Sangh is a social organization which works for the purpose of building values in the society.',
      imagePath: '../../assets/kys.jpeg',
      url: 'https://shrikys.org/',
    },
    {
      name: 'Akaimarine',
      description:
        'Akai Marine provide best class services in interior designing which includes color matching, floor refinishing, gold leafing, furniture refinishing, interior etc.',
      imagePath: './../assets/akaimarine.jpeg',
      url: 'https://www.akaimarine.com/',
    },
    {
      name: 'Joshter',
      description:
        'Joshter is an recruitment platform that provide hiring-related service to corporates/recruiters, placement agencies.',
      imagePath: '',
      url: '#',
    },
  ];
}
