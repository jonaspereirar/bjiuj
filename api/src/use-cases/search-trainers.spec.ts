import { InMemoryTrainersRepository } from '@/repositories/in-memory/in-memory-trainers-repository'

import { beforeEach, describe, expect, it } from 'vitest'
import { SearchTrainersUseCase } from './search-trainers'

let trainersRepository: InMemoryTrainersRepository
let sut: SearchTrainersUseCase

describe('Search trainers Use Case', () => {
  beforeEach(async () => {
    trainersRepository = new InMemoryTrainersRepository()
    sut = new SearchTrainersUseCase(trainersRepository)
  })

  it('should be able to search for trainers', async () => {
    await trainersRepository.create({
      title: 'Cva Trainer',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await trainersRepository.create({
      title: 'Barra Trainer',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    const { trainers } = await sut.execute({
      query: 'Cva',
      page: 1,
    })

    expect(trainers).toHaveLength(1)
    expect(trainers).toEqual([
      expect.objectContaining({ title: 'Cva Trainer' }),
    ])
  })

  it('should be able to fetch paginated trainer search', async () => {
    for (let i = 1; i <= 22; i++) {
      await trainersRepository.create({
        title: `Cva Trainer ${i}`,
        description: null,
        phone: null,
        latitude: -27.2092052,
        longitude: -49.6401091,
      })
    }

    const { trainers } = await sut.execute({
      query: 'Cva',
      page: 2,
    })

    expect(trainers).toHaveLength(2)
    expect(trainers).toEqual([
      expect.objectContaining({ title: 'Cva Trainer 21' }),
      expect.objectContaining({ title: 'Cva Trainer 22' }),
    ])
  })
})
