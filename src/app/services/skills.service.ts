import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TecnologieModel } from '../models/tecnologie.model';

@Injectable()
export class SkillsService {
	skills$: BehaviorSubject<TecnologieModel[]>;
	base_path: string ='/assets/icons/skills';

	constructor() {
		this.skills$ = new BehaviorSubject(this._getList());
	}

	getSkills(): Observable<TecnologieModel[]> {
		return this.skills$.asObservable();
	}

	private _getList(): TecnologieModel[] {
		let list: TecnologieModel[] = [];
		list.push({ nome: 'Spring Boot', url: `${this.base_path}/spring.svg`, alt: 'Logo do Spring Boot' });
		list.push({ nome: 'Java', url: `${this.base_path}/java.svg`, alt: 'Logo do Java' });
		list.push({ nome: 'Angular', url: `${this.base_path}/angular.svg`, alt: 'Logo do Angular' });
		list.push({ nome: 'Typescript', url: `${this.base_path}/typescript.svg`, alt: 'Logo do Typescript' });
		list.push({ nome: 'Javascript', url: `${this.base_path}/javascript.svg`, alt: 'Logo do Javascript' });
		list.push({ nome: 'HTML', url: `${this.base_path}/html.svg`, alt: 'Logo do HTML' });
		list.push({ nome: 'CSS', url: `${this.base_path}/css.svg`, alt: 'Logo do CSS' });
		list.push({ nome: 'Bootstrap', url: `${this.base_path}/bootstrap.svg`, alt: 'Logo do Bootstrap' });
		list.push({ nome: 'Tailwind CSS', url: `${this.base_path}/tailwind.svg`, alt: 'Logo do Tailwind CSS' });
		list.push({ nome: 'Nodejs', url: `${this.base_path}/node.svg`, alt: 'Logo do Nodejs' });
		list.push({ nome: 'PostgreSQL', url: `${this.base_path}/postgresql.svg`, alt: 'Logo do PostgreSQL' });
		list.push({ nome: 'MySQL', url: `${this.base_path}/mysql.svg`, alt: 'Logo do MySQL' });
		list.push({ nome: 'RabbitMQ', url: `${this.base_path}/rabbitmq.svg`, alt: 'Logo do RabbitMQ' });
		list.push({ nome: 'Git', url: `${this.base_path}/git.svg`, alt: 'Logo do Git' });
		list.push({ nome: 'Docker', url: `${this.base_path}/docker.svg`, alt: 'Logo do Docker' });
		list.push({ nome: 'PHP', url: `${this.base_path}/php.svg`, alt: 'Logo do PHP' });
		list.push({ nome: 'Vagrant', url: `${this.base_path}/vagrant.svg`, alt: 'Logo do Vagrant' });
		list.push({ nome: 'Figma', url: `${this.base_path}/figma.svg`, alt: 'Logo do Figma' });
		return list;
		// list.push({ nome: '', url: `${this.base_path}`, alt: '' });
	}
}
