const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User]
    userById(id: Int!): User

    orders: [Order]
    orderById(id: Int!): Order
    allOrdersByUserId(id: Int!): [Order]

    products: [Product]

    storeCategories: [StoreCategory]

    storeCategoryById(id: Int!): StoreCategory

    storeTypes: [StoreType]
    storeTypeById(id: Int!): StoreType
    storeTypeByCategoryId(id: Int!): [StoreType]

    stores: [Store]
    storeById(id: Int!): Store
    storesByTypeId(id: Int!): [Store]
    productsByStoreId(id: Int!): [Product]

    checkToken: User
  }

  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
  }

  type Order {
    id: ID!
    userId: ID!
    storeId: ID!
    delivererId: ID!
    orderTotal: Int!
    status: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    storeId: ID!
    name: String!
    price: Float!
    image: String!
  }

  type StoreCategory {
    id: ID!
    type: String!
  }

  type StoreType {
    id: ID!
    type: String!
    storeCategoryId: ID!
  }

  type Store {
    id: ID!
    type: String!
    name: String!
    longitude: Int!
    latitude: Int!
    storeTypeId: ID!
  }

  type Login {
    token: String!
    user: User!
  }

  type Mutation {
    signup(
      fullName: String!
      email: String!
      password: String!
      phoneNumber: Int!
    ): Login!

    login(email: String!, password: String!): Login!
  }
`;

module.exports = typeDefs;
