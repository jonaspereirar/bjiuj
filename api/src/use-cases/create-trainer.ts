import { TrainersRepository } from '@/repositories/trainers-repositorys'
import { Trainer } from '@prisma/client'

interface CreateTrainerUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateTrainerUseCaseResponse {
  trainer: Trainer
}

export class CreateTrainerUseCase {
  constructor(private trainersRepository: TrainersRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CreateTrainerUseCaseRequest): Promise<CreateTrainerUseCaseResponse> {
    const trainer = await this.trainersRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return {
      trainer,
    }
  }
}
