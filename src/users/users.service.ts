import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

private readonly users = [
    {
      id: 1,
      username: 'Aitor',
      password: '123'
    },
    {
      id: 2,
      username: 'Pepe',
      password: '123'
    },
    {
      id: 3,
      username: 'Paco',
      password: '123'
    },
  ]

  findAll() {
    return this.users
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username)
  }
}
