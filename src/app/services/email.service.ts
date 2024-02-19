import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailModel } from '../models/email.model';

@Injectable()
export class EmailService {
	baseUrl = `${environment.API_URL}/email`;

	constructor(private http: HttpClient) {}

	enviar(email: EmailModel) {
		this.http.post(this.baseUrl, email).subscribe({
			next: (item) => {
				console.info(item);
				return item;
			},
			error: (err) => {
				console.error(`Erro ao enviar email`, err);
				return err;
			},
			complete: () => {
				alert(`Email enviado com sucesso!`);
			},
		});
	}
}
