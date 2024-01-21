import { prisma } from '@/lib/prisma'
import { Prisma, Trainer } from '@prisma/client'
import {
  FindManyNearbyParams,
  TrainersRepository,
} from '../trainers-repositorys'

export class PrismaTrainersRepository implements TrainersRepository {
  async findById(id: string) {
    const trainer = await prisma.trainer.findUnique({
      where: {
        id,
      },
    })
    return trainer
  }

  async findManyNearby({ latitude, longitude }: FindManyNearbyParams) {
    const trainers = await prisma.$queryRaw<Trainer[]>`
    SELECT * from trainers
WHERE ( 6371 * acos( cos( radians(${latitude}) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(${longitude}) ) + sin( radians(${latitude}) ) * sin( radians( latitude ) ) ) ) <= 200
    `

    return trainers
  }

  async searchMany(query: string, page: number) {
    const trainers = await prisma.trainer.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })
    return trainers
  }

  async create(data: Prisma.TrainerCreateInput) {
    const trainer = await prisma.trainer.create({
      data,
    })
    return trainer
  }
}
