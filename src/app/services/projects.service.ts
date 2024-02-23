import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectsService {
	projects$: BehaviorSubject<ProjectModel[]>;
	base_path: string = '/assets/images/projects';

	constructor() {
		this.projects$ = new BehaviorSubject(this._getList());
	}

	getProjects(): Observable<ProjectModel[]> {
		return this.projects$.asObservable();
	}

	private _getList(): ProjectModel[] {
		let list: ProjectModel[] = [];
		list.push({
			nome: 'Cartão de Visitas',
			url: 'https://dbc-wiriswernek.vercel.app',
			imagem: `${this.base_path}/cartao_digital.png`,
			alt: 'Preview do Cartão de Visitas Digital',
			descricao: 'O futuro dos ultrapassados Cartões de Visita',
		});
		list.push({
			nome: 'Github Repos',
			url: 'https://github-repos-wiriswernek.vercel.app',
			imagem: `${this.base_path}/github_repos.png`,
			alt: 'Preview do Github Repos',
			descricao: 'Busque o que realmente te importa no Github',
		});
		list.push({
			nome: 'Previsão do Tempo',
			url: 'https://previsao-tempo-wiriswernek.vercel.app',
			imagem: `${this.base_path}/previsao_do_tempo.png`,
			alt: 'Preview do Previsão do Tempo',
			descricao: 'Previsão do tempo rápida e simples',
		});
		list.push({
			nome: 'Avaliações',
			url: 'https://avaliacoes-wiriswernek.vercel.app',
			imagem: `${this.base_path}/avaliacoes.png`,
			alt: 'Preview do Avaliações',
			descricao: 'Métricas e opiniões em um único lugar',
		});
		list.push({
			nome: 'Hotel Paraíso',
			url: 'https://wiriswernek.github.io/ProjetoHotelParaiso',
			imagem: `${this.base_path}/hotel_paraiso.png`,
			alt: 'Preview do Hotel Paraíso',
			descricao: 'Um hotel paradisíaco',
		});
		list.push({
			nome: 'Pede Aí',
			url: 'https://pedeai-wiriswernek.vercel.app',
			imagem: `${this.base_path}/pede_ai.png`,
			alt: 'Preview do Pede Aí',
			descricao: 'Bora pedir um açaí? pede aí',
		});

		return list;
		// list.push({ nome: '', url: `${this.base_path}`, alt: '' });
	}
}
