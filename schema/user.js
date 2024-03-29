import { gql } from 'apollo-server-express';

export default gql`
  scalar Date

  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }
  type User {
    id: ID!
    username: String!
    messages: [Message!]
    createdAt : Date
  }
`;