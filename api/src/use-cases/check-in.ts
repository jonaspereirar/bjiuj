import { CheckInsRepository } from '@/repositories/CheckInsRepository'
import { GymsRepository } from '@/repositories/gyms-repositorys'
import { TrainersRepository } from '@/repositories/trainers-repositorys'
import { getDistanceBetweenCoordinates } from '@/utils/get-distance-between-coordinates'
import { CheckIn } from '@prisma/client'
import { MaxDistanceError } from './erros/max-distance-error'
import { MaxNumberOfCheckInsError } from './erros/max-number-of-check-ins-error'
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
    private trainersRepository: TrainersRepository,
  ) {}

  async execute({
    userId,
    gymId,
    trainerId,
    userLattude,
    userLongitude,
  }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
    const gym = await this.gymsRepository.findById(gymId)
    const trainer = await this.trainersRepository.findById(trainerId)

    if (!gym || (trainerId && !trainer)) {
      throw new ResourceNotFoundError()
    }

    const distance = getDistanceBetweenCoordinates(
      { latitude: userLattude, longitude: userLongitude },
      {
        latitude:
          gym.latitude.toNumber() ||
          (trainer ? trainer.latitude.toNumber() : 0),
        longitude:
          gym.longitude.toNumber() ||
          (trainer ? trainer.longitude.toNumber() : 0),
      },
    )
    const MAX_DISTANCE_IN_KILOMETERS = 0.1
    if (distance > MAX_DISTANCE_IN_KILOMETERS) {
      throw new MaxDistanceError()
    }

    const checkInOnSameDay = await this.checkInsRepository.findByUserIdOnDate(
      userId,
      new Date(),
    )
    if (checkInOnSameDay) {
      throw new MaxNumberOfCheckInsError()
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
