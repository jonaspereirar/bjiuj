import { GymsRepository } from '@/repositories/gyms-repositorys'
import { Gym } from '@prisma/client'

export class InMemorygymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }

  async findByEmail(email: string) {
    const gym = this.items.find((item) => item.id === email)

    if (!gym) {
      return null
    }

    return gym
  }
}
