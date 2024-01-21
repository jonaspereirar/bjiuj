import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { InMemoryTrainersRepository } from '@/repositories/in-memory/in-memory-trainers-repository'
import { CheckInUseCase } from '@/use-cases/check-in'
import { Decimal } from '@prisma/client/runtime/library'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { MaxDistanceError } from './erros/max-distance-error'
import { MaxNumberOfCheckInsError } from './erros/max-number-of-check-ins-error'

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let trainersRepository: InMemoryTrainersRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    trainersRepository = new InMemoryTrainersRepository()
    sut = new CheckInUseCase(
      checkInsRepository,
      gymsRepository,
      trainersRepository,
    )

    await gymsRepository.create({
      id: 'gym-03',
      title: 'cva',
      description: '',
      phone: '',
      latitude: 37.7121308,
      longitude: -8.0792683,
      location: '',
    })
    await trainersRepository.create({
      id: 'trainer-02',
      title: 'cva',
      description: '',
      phone: '',
      latitude: 37.7121308,
      longitude: -8.0792683,
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } =
      (await sut.execute({
        gymId: 'gym-03',
        userId: 'user-01',
        trainerId: '',
        userLattude: 37.7121308,
        userLongitude: -8.0792683,
      })) ||
      trainersRepository.items.push({
        id: 'trainer-01',
        title: 'cva',
        description: '',
        phone: '',
        latitude: new Decimal(37.7121308),
        longitude: new Decimal(-8.0792683),
        game_id: '',
        gym_id: '',
      })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))
    ;(await sut.execute({
      gymId: 'gym-03',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })) ||
      trainersRepository.items.push({
        id: 'trainer-01',
        title: 'cva',
        description: '',
        phone: '',
        latitude: new Decimal(37.7121308),
        longitude: new Decimal(-8.0792683),
        game_id: '',
        gym_id: '',
      })

    await expect(
      () =>
        sut.execute({
          gymId: 'gym-03',
          userId: 'user-01',
          trainerId: '',
          userLattude: 37.7121308,
          userLongitude: -8.0792683,
        }) ||
        trainersRepository.items.push({
          id: 'trainer-01',
          title: 'cva',
          description: '',
          phone: '',
          latitude: new Decimal(37.7121308),
          longitude: new Decimal(-8.0792683),
          game_id: '',
          gym_id: '',
        }),
    ).rejects.toBeInstanceOf(MaxNumberOfCheckInsError)
  })

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))
    ;(await sut.execute({
      gymId: 'gym-03',
      userId: 'user-01',
      trainerId: '',
      userLattude: 37.7121308,
      userLongitude: -8.0792683,
    })) ||
      trainersRepository.items.push({
        id: 'trainer-01',
        title: 'cva',
        description: '',
        phone: '',
        latitude: new Decimal(37.7121308),
        longitude: new Decimal(-8.0792683),
        game_id: '',
        gym_id: '',
      })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } =
      (await sut.execute({
        gymId: 'gym-03',
        userId: 'user-01',
        trainerId: '',
        userLattude: 37.7121308,
        userLongitude: -8.0792683,
      })) ||
      trainersRepository.items.push({
        id: 'trainer-01',
        title: 'cva',
        description: '',
        phone: '',
        latitude: new Decimal(37.7121308),
        longitude: new Decimal(-8.0792683),
        game_id: '',
        gym_id: '',
      })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in on distant gym', async () => {
    gymsRepository.items.push({
      id: 'gym-02',
      title: 'barra',
      description: '',
      phone: '',
      latitude: new Decimal(37.7664758),
      longitude: new Decimal(-8.1329193),
      location: '',
    }) ||
      trainersRepository.items.push({
        id: 'trainer-01',
        title: 'cva',
        description: '',
        phone: '',
        latitude: new Decimal(37.7121308),
        longitude: new Decimal(-8.0792683),
        game_id: '',
        gym_id: '',
      })

    await expect(
      () =>
        sut.execute({
          gymId: 'gym-02',
          userId: 'user-01',
          trainerId: '',
          userLattude: 37.7121308,
          userLongitude: -8.0792683,
        }) ||
        trainersRepository.items.push({
          id: 'trainer-01',
          title: 'cva',
          description: '',
          phone: '',
          latitude: new Decimal(37.7121308),
          longitude: new Decimal(-8.0792683),
          game_id: '',
          gym_id: '',
        }),
    ).rejects.toBeInstanceOf(MaxDistanceError)
    // expect(checkIn.id).toEqual(expect.any(String))
  })
})
