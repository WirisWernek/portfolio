import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialLinkModel } from 'src/app/models/social-link.model';
import { SocialLinksService } from 'src/app/services/social-links.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
	socialLinks$!: Observable<SocialLinkModel[]>;
	
	constructor(private socialLinksService: SocialLinksService) {}

	ngOnInit(): void {
		this.socialLinks$ = this.socialLinksService.getSocialLinks();
	}
}
