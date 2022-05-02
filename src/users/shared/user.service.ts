import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
  users: User[] = [
    { id: 0, nome: 'Carlos Moreira', idade: 30 },
    { id: 1, nome: 'Francisco Werner', idade: 30 },
  ];

  getAll() {
    return this.users;
  }

  getById(id: number) {
    return this.users.find((user) => user.id == id);
  }

  create(user: User) {
    let lastId = 0;
    if (this.users.length > 0) {
      lastId = this.users[this.users.length - 1].id;
    }
    user.id = lastId + 1;
    this.users.push(user);
    return user;
  }

  update(user: User) {
    const currentUser = this.getById(user.id);
    if (currentUser) {
      currentUser.nome = user.nome;
      currentUser.idade = user.idade;
    }
    return currentUser;
  }

  delete(id: number) {
    this.users = this.users.filter((user) => user.id != id);
  }
}
