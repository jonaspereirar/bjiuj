import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { InMemorygymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CheckInUseCase } from '@/use-cases/check-in'
import { Decimal } from '@prisma/client/runtime/library'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemorygymsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemorygymsRepository()
    sut = new CheckInUseCase(checkInsRepository, gymsRepository)

    gymsRepository.items.push({
      id: 'gym-01',
      title: 'cva',
      description: '',
      phone: '',
      latitude: new Decimal(0),
      longitude: new Decimal(0),
      location: '',
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-01',
        userId: 'user-01',
        trainerId: '',
        userLattude: 37.7121308,
        userLongitude: -8.0792683,
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
