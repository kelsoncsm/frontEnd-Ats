import { VagaModel } from "./vagaModel";

export class CandidatoModel {

  id?: number;
  nome?: string;
  sobreNome?: string;
  telefone?: string;
  email?: string;
  dataNascimento?: Date;
  dataCadastro?: Date;
  isAtivo?: boolean;
  statusDescricao?:string;
  Candidatura?:CandidatoModel;
  Vaga?:VagaModel;

}
