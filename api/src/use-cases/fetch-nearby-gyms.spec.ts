import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    // Castro Verde
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: 37.7121308,
      longitude: -8.0792683,
    })
    // Coimbra
    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: 40.2287599,
      longitude: -8.4162744,
    })

    // Castro Verde
    const { gyms } = await sut.execute({
      userLatitude: 37.7121308,
      userLongitude: -8.0792683,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
