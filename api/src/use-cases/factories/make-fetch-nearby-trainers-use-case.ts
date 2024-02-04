import { PrismaTrainersRepository } from '@/repositories/prisma/prisma-trainers-repository'
import { FetchNearbyTrainersUseCase } from '../fetch-nearby-trainers'

export function makeFetchNearbyTrainersUseCase() {
  const trainersRepository = new PrismaTrainersRepository()
  const useCase = new FetchNearbyTrainersUseCase(trainersRepository)

  return useCase
}
