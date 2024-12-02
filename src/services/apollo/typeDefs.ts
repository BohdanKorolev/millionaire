import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Answer {
    text: String!
    isCorrect: Boolean!
  }

  type Question {
    id: ID!
    question: String!
    answers: [Answer!]!
    reward: String!
  }

  type Query {
    questions: [Question!]!
  }
`;

export default typeDefs;
