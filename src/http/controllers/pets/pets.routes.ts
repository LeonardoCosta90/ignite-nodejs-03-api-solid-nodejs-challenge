import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { createPetController } from './create-pet.controller'


export async function petsRoutes(app: FastifyInstance) {
  app.post('/orgs/pets', { onRequest: [verifyJwt] }, createPetController)

}