import { gql } from "apollo-server";

export const typeDefs = gql`
type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
}

type Query {
    getPosts: [Post]
}`;