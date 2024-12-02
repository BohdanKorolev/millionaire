import questions from '../../configs/game.config.json';

const resolvers = {
  Query: {
    questions: () => questions,
  },
};
export default resolvers;
