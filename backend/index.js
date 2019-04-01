const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers: {
        Mutation,
        Query
    },
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    context: req => ({
        ...req,
        prisma: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'https://us1.prisma.sh/nariman-adam/movies-app/dev',
        }),
        debug: true,
    }),
})

server.start(
    () => console.log(`Server is running on http://localhost:4000`),
)