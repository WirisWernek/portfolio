import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailModel } from 'src/app/models/email.model';
import { EmailService } from 'src/app/services/email.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	emailForm!: FormGroup;

	constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
		this.emailForm = this.formBuilder.group({
			nome: ['', Validators.required],
			assunto: ['', Validators.required],
			mensagem: ['', Validators.required],
			email: [
				'',
				[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
			],
		});
	}
	enviarEmail() {
		let email: EmailModel = {
			collection: 'emails',
			data: {
				titulo: 'Contato By Wiris Wernek',
				para: 'wiriswernek@gmail.com',
				emCopia: this.emailForm.get('email')?.value,
				remetente: this.emailForm.get('email')?.value,
				assunto: this.emailForm.get('assunto')?.value,
				conteudo: this.emailForm.get('mensagem')?.value,
				agradecimento: 'Agradeço pelo Contato!',
			},
		};
		this.emailService.enviar(email);
	}
	limparCampos() {}
}
