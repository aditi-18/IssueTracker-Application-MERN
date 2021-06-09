
const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');


let aboutMessage = "Issue Tracker API v1.0";

const issuesDB = [
    {
    id: 1, status: 'New', Owner: 'Sidharth', effort: 25,
    created: new Date('2019-12-15'), due: undefined,
    title: 'Error in console when clicking Add',
    },
    {
    id: 2, status: 'Assigned', Owner: 'Akash', effort: 14,
    created: new Date('2019-01-29'), due: new Date('2019-02-01'),
    title: 'Missing bottom border on panel',
    },
    {
    id: 3, status: 'Assigned', Owner: 'Amala', effort: 14,
    created: new Date('2019-01-16'), due: new Date('2019-02-01'),
    title: 'Missing Document',
    }
   ];

   const GraphQLDate = new GraphQLScalarType({
    parseValue(value) {
        const dateValue = new Date(value);
 return isNaN(dateValue) ? undefined : dateValue;
        },
        parseLiteral(ast) {
            if (ast.kind == Kind.STRING) {
                const value = new Date(ast.value);
                return isNaN(value) ? undefined : value;
                }
        },
        
    name: 'GraphQLDate',
    description: 'A Date() type in GraphQL as a scalar',
    serialize(value) {
    return value.toISOString();
    },
   });

const resolvers = {
 Query: {
 about: () => aboutMessage,
 issueList,
 },
 Mutation: {
 setAboutMessage,
 issueAdd,
 },
 GraphQLDate,
};
function setAboutMessage(_, { message }) {
 return a
}
 
 function issueValidate(issue) {
    const errors = [];
    if (issue.title.length < 3) {
    errors.push('Field "title" must be at least 3 characters long.')
    }
    if (issue.status == 'Assigned' && !issue.Owner) {
    errors.push('Field "Owner" is required when status is "Assigned"');
    }
    if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
    }
   }


function issueAdd(_, { issue }) {
    issue.created = new Date();
    issue.id = issuesDB.length + 1;
    if (issue.status == undefined) issue.status = 'New';
    issuesDB.push(issue);
    return issue;
   }

function issueList() {
    return issuesDB;
   }
const server = new ApolloServer({
 typeDefs:fs.readFileSync('./schema.graphql', 'utf-8'),
 resolvers,
 formatError: error => {
    console.log(error);
    return error;
 },
});
const app = express();
app.use(express.static('public'));
server.applyMiddleware({ app, path: '/graphql' });
app.listen(3000, function () {
 console.log('App started on port 3000');
});