import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de front-end podem acessar o back-end
  // origin: ['http://localhost:3000', 'https://my-app.com'] // apenas essas URLs podem acessar o back-end // indica para produção
})

app.register(jwt, {
  secret: 'spacetime', // o correto é uma chave secreta bem grande e aleatória
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
