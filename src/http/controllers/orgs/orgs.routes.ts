import { FastifyInstance } from 'fastify'

import { authenticateOrgController } from '@/http/controllers/orgs/authenticate-org.controller'
import { createOrgController } from './create-org.controller'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', createOrgController)
  app.post('/orgs/authenticate', authenticateOrgController)
}
