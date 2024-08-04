/// <reference types="@angular/localize" />

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { EmailService } from './app/services/email.service';
import { ProjectsService } from './app/services/projects.service';
import { SkillsService } from './app/services/skills.service';
import { SocialLinksService } from './app/services/social-links.service';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			NgbModule,
			NgbTooltipModule,
			FormsModule,
			ReactiveFormsModule
		),
		EmailService,
		ProjectsService,
		SkillsService,
		SocialLinksService,
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		provideRouter(
			routes,
			withInMemoryScrolling({
				// onSameUrlNavigation: 'reload',
				anchorScrolling: 'enabled',
				// enableTracing: false,
			})
		),
	],
}).catch((err) => console.error(err));
