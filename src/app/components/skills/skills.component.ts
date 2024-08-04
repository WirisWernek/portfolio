import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnologieModel } from 'src/app/models/tecnologie.model';
import { SkillsService } from 'src/app/services/skills.service';
import { AsyncPipe } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [NgbTooltip, AsyncPipe],
})
export class SkillsComponent implements OnInit {
	skills$!: Observable<TecnologieModel[]>;
	
	constructor(private skillsService: SkillsService) {}

	ngOnInit(): void {
		this.skills$ = this.skillsService.getSkills();
	}
}
