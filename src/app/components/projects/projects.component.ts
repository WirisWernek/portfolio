import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projects$!: Observable<ProjectModel[]>;
	
	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projects$ = this.projectsService.getProjects();
	}
}
