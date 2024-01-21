import { InMemoryTrainersRepository } from '@/repositories/in-memory/in-memory-trainers-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateTrainerUseCase } from './create-trainer'

let trainersRepository: InMemoryTrainersRepository
let sut: CreateTrainerUseCase

describe('Create Trainer Use Case', () => {
  beforeEach(() => {
    trainersRepository = new InMemoryTrainersRepository()
    sut = new CreateTrainerUseCase(trainersRepository)
  })

  it('should to create trainer', async () => {
    const { trainer } = await sut.execute({
      title: 'JavaScript Trainer',
      description: null,
      phone: null,
      latitude: 37.7121308,
      longitude: -8.0792683,
    })

    expect(trainer.id).toEqual(expect.any(String))
  })
})
