import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import { config } from './src/config'
import { resolvers, typeDefs } from './src/graphql'
import 'apollo-cache-control'

const myPlugin = {
  serverWillStart (requestContext) {
    console.log('apollo server has been started!!!')
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  plugins: [myPlugin],
  introspection: true
});

(async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('%cMongoDB Connected!', 'color: #1c87c9; font-size: 18px')

    const { url } = await server.listen({ port: 5000 })

    console.log(`Server running at ${url}`)
  } catch (err) {
    console.error(err)
  }
})()
