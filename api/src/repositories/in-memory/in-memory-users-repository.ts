import { UsersRepository } from '@/repositories/users-repository'
import { Prisma, User } from '@prisma/client'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      gym_Id: null,
      game_Id: null,
    }

    this.items.push(user)

    return user
  }
}

// InMemoryTestDatabase - Martin Fowler 🫡 https://martinfowler.com/bliki/InMemoryTestDatabase.html
