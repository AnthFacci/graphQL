const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    scalar Date # Criar tipos personalizados no próprio schema

    type User {
        id: ID,
        nome: String!,
        email: String!,
        idade: Int,
        salario: Float,
        vip: Boolean
    }

    type Query { 
        ola: String,
        int: Int,
        date: Date,
        user: User
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
            return new Date;
        },
        user(){
            return {
                id:      Math.floor(Math.random() * 50),
                nome:    "Anthony",
                email:   "Anthony.m.facc@gmail.com",
                idade:   21,
                salario: 10.000,
                vip:     true
            };
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