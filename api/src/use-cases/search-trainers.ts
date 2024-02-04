import { TrainersRepository } from '@/repositories/trainers-repositorys'
import { Trainer } from '@prisma/client'

interface SearchTrainersUseCaseRequest {
  query: string
  page: number
}

interface SearchTrainersUseCaseResponse {
  trainers: Trainer[]
}

export class SearchTrainersUseCase {
  constructor(private trainersRepository: TrainersRepository) {}

  async execute({
    query,
    page,
  }: SearchTrainersUseCaseRequest): Promise<SearchTrainersUseCaseResponse> {
    const trainers = await this.trainersRepository.searchMany(query, page)

    return {
      trainers,
    }
  }
}
