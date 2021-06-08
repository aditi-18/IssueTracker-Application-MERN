/*const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, function () {
 console.log('App started on port 3000');
});*/

const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
let aboutMessage = "Issue Tracker API v1.0";

const resolvers = {
 Query: {
 about: () => aboutMessage,
 },
 Mutation: {
 setAboutMessage,
 },
};
function setAboutMessage(_, { message }) {
 return aboutMessage = message;
}
const server = new ApolloServer({
 typeDefs:fs.readFileSync('./schema.graphql', 'utf-8'),
 resolvers,
});
const app = express();
app.use(express.static('public'));
server.applyMiddleware({ app, path: '/graphql' });
app.listen(3000, function () {
 console.log('App started on port 3000');
});