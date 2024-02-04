import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { nearby } from './nearby'
import { search } from './search'

export async function trainersRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.get('/trainers/search', search)
  app.get('/trainers/nearby', nearby)

  app.post('/trainers', create)
}
