import { InMemoryTrainersRepository } from '@/repositories/in-memory/in-memory-trainers-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyTrainersUseCase } from './fetch-nearby-trainers'

let trainersRepository: InMemoryTrainersRepository
let sut: FetchNearbyTrainersUseCase

describe('Fetch Nearby Trainers Use Case', () => {
  beforeEach(async () => {
    trainersRepository = new InMemoryTrainersRepository()
    sut = new FetchNearbyTrainersUseCase(trainersRepository)
  })

  it('should be able to fetch nearby trainers', async () => {
    // Castro Verde
    await trainersRepository.create({
      title: 'Near Trainer',
      description: null,
      phone: null,
      latitude: 37.7121308,
      longitude: -8.0792683,
    })
    // Coimbra
    await trainersRepository.create({
      title: 'Far Trainer',
      description: null,
      phone: null,
      latitude: 40.2287599,
      longitude: -8.4162744,
    })

    // Castro Verde
    const { trainers } = await sut.execute({
      userLatitude: 37.7121308,
      userLongitude: -8.0792683,
    })

    expect(trainers).toHaveLength(1)
    expect(trainers).toEqual([
      expect.objectContaining({ title: 'Near Trainer' }),
    ])
  })
})
