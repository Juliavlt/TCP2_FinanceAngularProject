import { Financa } from "./financa.model";

export interface Financas{
  idUser?: number;
  totalExpense?:number;
  totalIncome?:number;
  receitasResponseList?: Financa[];
  despesasResponseList?: Financa[];
  erro?:string;
  }
