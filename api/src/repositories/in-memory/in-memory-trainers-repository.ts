import { TrainersRepository } from '@/repositories/trainers-repositorys'
import { Prisma, Trainer } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryTrainersRepository implements TrainersRepository {
  public items: Trainer[] = []

  async findById(id: string) {
    const trainer = this.items.find((item) => item.id === id)

    if (!trainer) {
      return null
    }

    return trainer
  }

  async findByEmail(email: string) {
    const trainer = this.items.find((item) => item.id === email)

    if (!trainer) {
      return null
    }

    return trainer
  }

  async create(data: Prisma.TrainerCreateInput) {
    const trainer = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      phone: data.phone ?? null,
      graduation: data.graduations ?? null,
      gym_id: null,
      game_id: null,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
      created_at: new Date(),
    }

    this.items.push(trainer)

    return trainer
  }
}
