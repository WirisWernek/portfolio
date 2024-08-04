import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialLinkModel } from 'src/app/models/social-link.model';
import { SocialLinksService } from 'src/app/services/social-links.service';
import { AsyncPipe } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss'],
    standalone: true,
    imports: [NgbTooltip, AsyncPipe]
})
export class SocialComponent implements OnInit {
	socialLinks$!: Observable<SocialLinkModel[]>;
	
	constructor(private socialLinksService: SocialLinksService) {}

	ngOnInit(): void {
		this.socialLinks$ = this.socialLinksService.getSocialLinks();
	}
}
