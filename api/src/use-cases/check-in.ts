import { CheckInsRepository } from '@/repositories/CheckInsRepository'
import { CheckIn } from '@prisma/client'

interface CheckInUseCaseRequest {
  userId: string
  gymId: string
  trainerId: string
}

interface CheckInUseCaseResponse {
  checkIn: CheckIn
}

export class CheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    gymId,
    trainerId,
  }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
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
