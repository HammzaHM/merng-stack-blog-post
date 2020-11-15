import postsResolvers from './posts'
import usersResolvers from './users'

export const resolvers = {
    Query: {
        ...postsResolvers.Query,
        ...usersResolvers.Query,
   },
   Mutation: {
       ...usersResolvers.Mutation
   }
}