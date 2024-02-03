import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TecnologieModel } from 'src/app/models/tecnologie.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	skills$!: Observable<TecnologieModel[]>;
	constructor(private skillsService: SkillsService) {}
	ngOnInit(): void {
		this.skills$ = this.skillsService.getSkills();
	}
}
