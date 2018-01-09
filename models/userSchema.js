
//schema.js
import { buildSchema } from 'graphql';

const schema = buildSchema(` 
  type User {
    name: String!
    sex: String
    intro: String
    skills: [String]!
  }
  input UserInput {
    name: String!
    sex: String
    intro: String
    skills: [String]!
  }
  type Query {
    user(id:Int!): User
    users:[User]
  }
  type Mutation {
    addUser(name:String!,sex:String,intro:String,skills:[String]!):User
    addUserByInput(userInfo:UserInput!):User
  }
`)

export default schema;