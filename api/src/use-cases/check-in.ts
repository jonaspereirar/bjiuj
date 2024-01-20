import { CheckInsRepository } from '@/repositories/CheckInsRepository'
import { GymsRepository } from '@/repositories/gyms-repositorys'
import { CheckIn } from '@prisma/client'
import { ResourceNotFoundError } from './erros/resource-not-found-error'

interface CheckInUseCaseRequest {
  userId: string
  gymId: string
  trainerId: string
  userLattude: number
  userLongitude: number
}

interface CheckInUseCaseResponse {
  checkIn: CheckIn
}

export class CheckInUseCase {
  constructor(
    private checkInsRepository: CheckInsRepository,
    private gymsRepository: GymsRepository,
  ) {}

  async execute({
    userId,
    gymId,
    trainerId,
  }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
    const gym = await this.gymsRepository.findById(gymId)

    if (!gym) {
      throw new ResourceNotFoundError()
    }

    const checkInOnSameDay = await this.checkInsRepository.findByUserIdOnDate(
      userId,
      new Date(),
    )
    if (checkInOnSameDay) {
      throw new Error()
    }

    const checkIn = await this.checkInsRepository.create({
      gym_id: gymId,
      user_id: userId,
      trainer_id: trainerId,
    })

    return {
      checkIn,
    }
  }
}
