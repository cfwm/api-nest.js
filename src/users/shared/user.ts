import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
class Address {
  @ApiProperty({
    required: false,
    example: '00000-000',
    description: 'The ibge code of user address',
  })
  cep: string;
  @ApiProperty({
    required: false,
    example: 'SC',
    description: 'The state of user address',
  })
  state: string;
  @ApiProperty({
    required: false,
    example: 'Cidade',
    description: 'The city of user address',
  })
  city: string;
  @ApiProperty({
    required: false,
    example: 'Bairro',
    description: 'The district of user address',
  })
  district: string;
  @ApiProperty({
    required: false,
    example: 'Logradouro',
    description: 'The street of user address',
  })
  street: string;
  @ApiProperty({
    required: false,
    example: '100',
    description: 'The number of user address',
  })
  number: string;
  @ApiProperty({
    required: false,
    example: 'Complemento do endereço',
    description: 'The complement of user address',
  })
  complement: string;
  @ApiProperty({
    required: false,
    example: '00000-000',
    description: 'The ibge code of user address',
  })
  ibge: string;
}

class Repository {
  @ApiProperty({
    required: false,
    example: 'repository-name',
    description: 'The name of respository',
  })
  name: string;

  @ApiProperty({
    required: false,
    example: 'https://github.com/cfwm/repository-name',
    description: 'The url of respository',
  })
  url: string;
}

class Github {
  @ApiProperty({
    required: false,
    example: 'github-login',
    description: 'The login of user GitHub',
  })
  login: string;

  @ApiProperty({
    required: false,
    example: 12345678,
    description: 'The id of user GitHub',
  })
  id: number;

  @ApiProperty({
    required: false,
    example: 1,
    description: 'The score of user GitHub',
  })
  score: number;

  @ApiProperty({
    required: false,
    example: 'https://api.github.com/users/github-login',
    description: 'The url of user GitHub',
  })
  url: string;

  @ApiProperty({
    required: false,
    example: 'https://github.com/github-login',
    description: 'The html_url of user GitHub',
  })
  html_url: string;

  @ApiProperty({
    required: false,
    example: 'https://avatars.githubusercontent.com/u/21279034?v=1',
    description: 'The avatar_url of user GitHub',
  })
  avatar_url: string;

  @ApiProperty({
    required: false,
    example: 'https://api.github.com/users/github-login/repos',
    description: 'The repos_url of user GitHub',
  })
  repos_url: string;

  @ApiProperty({
    required: false,
    example: 22,
    description: 'The amount of repositories of user GitHub',
  })
  repos_amount: number;

  @ApiProperty({
    type: [Repository],
    required: false,
  })
  repositories: Repository[];
}

export class User extends Document {
  @ApiProperty({
    example: 'User Name',
    description: 'The name of the user',
  })
  name: string;

  @ApiProperty({
    example: 'User Surname',
    description: 'The surname of the user',
  })
  surname: string;

  @ApiProperty({
    example: 'User E-mail',
    description: 'The e-mail of the user',
  })
  email: string;

  @ApiProperty({
    example: 30,
    description: 'The age of the user',
  })
  age: number;

  @ApiProperty({ type: () => Address, required: false })
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

  @ApiProperty({ type: () => Github, required: false })
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
