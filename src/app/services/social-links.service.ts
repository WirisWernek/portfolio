import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocialLinkModel } from '../models/social-link.model';

@Injectable()
export class SocialLinksService {
	socialLinks$: BehaviorSubject<SocialLinkModel[]>;
	base_path: string = '/assets/icons/social';

	constructor() {
		this.socialLinks$ = new BehaviorSubject(this._getList());
	}

	getSocialLinks(): Observable<SocialLinkModel[]> {
		return this.socialLinks$.asObservable();
	}

	private _getList(): SocialLinkModel[] {
		let list: SocialLinkModel[] = [];
		list.push({ nome: 'Linkedin', icon: `${this.base_path}/linkedin.png`, url: 'https://www.instagram.com/wiriswernek/', alt: 'Icone do Linkedin' });
		list.push({ nome: 'Github', icon: `${this.base_path}/github.png`, url: 'https://github.com/WirisWernek', alt: 'Ícone do Github' });
		list.push({ nome: 'Instagram', icon: `${this.base_path}/instagram.png`, url: 'https://www.instagram.com/wiriswernek/', alt: 'Ícone do Instagram' });
		list.push({ nome: 'Email', icon: `${this.base_path}/mail.png`, url: 'mailto:wiriswernek@gmail.com', alt: 'Ícone do Email' });
		list.push({ nome: 'Cartão', icon: `${this.base_path}/visit-card.png`, url: 'https://dbc-wiriswernek.vercel.app/', alt: 'Ícone do Cartão de Visitas' });
		list.push({ nome: 'Youtube', icon: `${this.base_path}/youtube.png`, url: 'https://www.youtube.com/@wiriswernek', alt: 'Ícone do Youtube' });
		
		return list;
		// list.push({ nome: '', url: `${this.base_path}`, alt: '' });
	}
}
