let express = require('express');
let cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

app.use(cors());

const schema = gql`
	type User {
		id: ID!
		name: String!
		email: String!
	}
	type Query {
		users: [User!]
		user(id: ID!): User
	}
  
`;


const data = {
  users: [
	  {
		id: '1',
		name: 'Juan Manuel Meneses',
		email: 'jmenesesi@jmenesesi.com'
	  },
	  {
		id: '2',
		name: 'Rolando Mota del Campo',
		email: 'rmotad@jmenesesi.com'
	  },
  ]
};

const resolvers = {
  Query: {
	user:(parent, {id}) => {
		return data.users.find(u => u.id === id);
	},
	users: () => {
		return Object.values(data.users);
	}
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});