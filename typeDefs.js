import {
    gql,
  } from "apollo-server-express";

const typeDefs = gql`
  scalar Date
  
  type Todo {
    id: ID
    task: String
    description: String
    dueDate: Date
  }

  
  type Query {
    getTodos: [Todo]
    getTodo(id:ID): Todo
  }

  type Mutation {
    addTodo(task: String, description: String, dueDate: Date): Todo
    updateTodo(id: ID, task: String, description: String, dueDate: Date): Todo
    deleteTodo(id: ID): String
  }
`;

export default typeDefs