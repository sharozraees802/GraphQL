const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: 1,
    name: "ali",
    email: "ali@gmail.com",
    age: 22,
  },
  {
    id: 2,
    name: "hassan",
    email: "hassan@gmail.com",
    age: 21,
  },
  {
    id: 3,
    name: "sheroz",
    email: "sharoz@gmail.com",
    age: 22,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
};

const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
