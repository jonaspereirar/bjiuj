import { PrismaTrainersRepository } from '@/repositories/prisma/prisma-trainers-repository'
import { SearchTrainersUseCase } from '../search-trainers'

export function makeSearchTrainersUseCase() {
  const trainersRepository = new PrismaTrainersRepository()
  const useCase = new SearchTrainersUseCase(trainersRepository)

  return useCase
}
