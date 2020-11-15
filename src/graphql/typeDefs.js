import { gql } from "apollo-server";

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
    getUsers: [User]
}

type Mutation {
    register(registerInput: RegisterInput): User
}

`;