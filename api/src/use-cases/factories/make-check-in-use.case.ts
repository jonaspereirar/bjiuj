import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { PrismaTrainersRepository } from '@/repositories/prisma/prisma-trainers-repository'
import { CheckInUseCase } from '../check-in'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const trainersRepository = new PrismaTrainersRepository()

  const useCase = new CheckInUseCase(
    checkInsRepository,
    gymsRepository,
    trainersRepository,
  )

  return useCase
}
