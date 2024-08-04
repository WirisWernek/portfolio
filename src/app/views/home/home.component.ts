import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { SocialComponent } from '../../components/social/social.component';
import { AboutComponent } from '../../components/about/about.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NavbarComponent, AboutComponent, SocialComponent, SkillsComponent, ProjectsComponent, ExperiencesComponent, ContactComponent]
})
export class HomeComponent {

}
