import { Prisma, Trainer } from '@prisma/client'

export interface TrainersRepository {
  findById(id: string): Promise<Trainer | null>
  create(data: Prisma.TrainerCreateInput): Promise<Trainer>
}
