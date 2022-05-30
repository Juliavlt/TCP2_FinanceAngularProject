import { Financa } from "./financa.model";
import { FinanceInfo } from "./financeInfo";

export interface UserInfo{
  id?:number;
  username?: string;
  password?: string;
  despesas?: FinanceInfo[];
  receitas?: FinanceInfo[];
  totalDespesas?: number;
  totalReceitas?: number;
  total?: number;
  erro?:string;
  }
