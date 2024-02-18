import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Vehicle {
    id: ID!
    name: String
    msidn: String
    engineStatus: String
    fleet: String
    brand: String
    countryOfOperation: String
    chassisNumber: String
    cassisSeries: String
    communicationStatus: String
    services: [Service]
  }

  type Service {
    serviceName: String
    status: String
    lastUpdate: String
    reason: String
  }

  type Query {
    vehicleById(id: ID!): Vehicle
    vehicleByNamePart(namePart: String!): [Vehicle]
    vehicleByServiceStatus(serviceName: String!, serviceStatus: String!): [Vehicle]
  }
`;
