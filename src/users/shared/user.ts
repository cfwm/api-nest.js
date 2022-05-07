import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  surname: string;
  age: number;
}
