import { Answer } from "./Answer";
import { User } from "./User";

export interface Question {
  id?:number;
  question: string;
  descriptionQuestion: string;
  like?:number;
  dislike?: number;
  anonymous?:boolean;
  answers?: Answer[];
  user: User;
}
