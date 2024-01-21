import { TrainersRepository } from '@/repositories/trainers-repositorys'
import { Trainer } from '@prisma/client'

interface FetchNearbyTrainersUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearbyTrainersUseCaseResponse {
  trainers: Trainer[]
}

export class FetchNearbyTrainersUseCase {
  constructor(private trainersRepository: TrainersRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyTrainersUseCaseRequest): Promise<FetchNearbyTrainersUseCaseResponse> {
    const trainers = await this.trainersRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      trainers,
    }
  }
}
