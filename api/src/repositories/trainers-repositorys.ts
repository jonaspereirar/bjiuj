import { Prisma, Trainer } from '@prisma/client'

export interface FindManyNearbyParams {
  latitude: number
  longitude: number
}

export interface TrainersRepository {
  findById(id: string): Promise<Trainer | null>
  findManyNearby(params: FindManyNearbyParams): Promise<Trainer[]>
  create(data: Prisma.TrainerCreateInput): Promise<Trainer>
}
