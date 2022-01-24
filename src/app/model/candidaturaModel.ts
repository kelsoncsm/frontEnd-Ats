import { VagaModel } from 'src/app/model/vagaModel';
import { CandidatoModel } from 'src/app/model/candidatoModel';



export class CandidaturaModel {
  id?: number;
  nome ?: string;
  descricao ?: string;
  dataInicio ?: Date;
  dataFim ?: Date;
  requisitos ?: string;
  idCandidato?:number;
  idVaga?:number;
  isAtivo?:boolean;

}
