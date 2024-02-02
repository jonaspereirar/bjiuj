import { PrismaTrainersRepository } from '@/repositories/prisma/prisma-trainers-repository'
import { CreateTrainerUseCase } from '../create-trainer'

export function makeCreateTrainerUseCase() {
  const trainersRepository = new PrismaTrainersRepository()
  const useCase = new CreateTrainerUseCase(trainersRepository)

  return useCase
}
