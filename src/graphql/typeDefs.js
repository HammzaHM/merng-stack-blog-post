import { gql } from 'apollo-server'

export const typeDefs = gql`
type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}

type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    token: String!
}

input RegisterInput {
    username: String!,
    password: String!
    confirmPassword: String!
    email: String!
}

type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getUsers: [User]
    getUser(userId: ID!): User
}

type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User! 
    createPost(body: String!): Post!
    deletePost(postId:ID!): String!
}
`
