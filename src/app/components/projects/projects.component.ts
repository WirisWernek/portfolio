import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { AsyncPipe } from '@angular/common';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: true,
    imports: [NgbCarousel, NgbSlide, AsyncPipe]
})
export class ProjectsComponent implements OnInit {
	projects$!: Observable<ProjectModel[]>;
	
	constructor(private projectsService: ProjectsService) {}

	ngOnInit(): void {
		this.projects$ = this.projectsService.getProjects();
	}
}
