const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    type Query { 
        ola: String,
        int: Int,
        date: String
    }
`;


const resolvers = {
    Query: {
        ola() {
            return "Primeiro resolver"
        }, 
        int()
        {
            return 2
        },
        date()
        {
            return new Date().getDate().toString();
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});