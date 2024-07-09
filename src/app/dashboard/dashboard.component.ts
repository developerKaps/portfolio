import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CollectionComponent } from '../collection/collection.component';
import { FooterComponent } from '../footer/footer.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, AboutusComponent, CollectionComponent, FooterComponent, SkillsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
