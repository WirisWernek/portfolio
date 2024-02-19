export interface EmailModel {
	collection: string
	data: {
		para: string;
		remetente: string;
		emCopia: string;
		titulo: string;
		assunto: string;
		agradecimento: string;
		conteudo: string;
	}
}
