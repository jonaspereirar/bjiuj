import { PrismaTrainersRepository } from '@/repositories/prisma/prisma-trainers-repository'
import { CreateTrainerUseCase } from '../create-trainer'

export function makeCreateGymUseCase() {
  const trainersRepository = new PrismaTrainersRepository()
  const useCase = new CreateTrainerUseCase(trainersRepository)

  return useCase
}
