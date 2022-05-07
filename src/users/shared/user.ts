import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  surname: string;
  age: number;
  address: {
    cep: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    complement: string;
    ibge: string;
  };
  github: {
    login: string;
    id: number;
    score: number;
    url: string;
    html_url: string;
    avatar_url: string;
    repos_url: string;
    repos_amount: number;
    repositories: [];
  };
}
