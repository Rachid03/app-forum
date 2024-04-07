import { User } from "./User";

export interface Answer {
  id:number;
  content:string;
  idQuestion?: number;
  user?:User;
}
