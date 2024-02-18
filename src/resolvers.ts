/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { findById, findByNamePart, findByServiceStatus } from './database.js';

export const resolvers = {
  Query: {
    vehicleById: async (_: never, { id }: { id: string }) => {
      try {
        const vehicle = (await findById(id))[0];
        return vehicle;
      } catch (error) {
        console.error('Error finding vehicle:', error);
        return null;
      }
    },
    vehicleByNamePart: async (_: never, { namePart }: { namePart: string }) => {
      try {
        const vehicle = await findByNamePart(namePart);
        return vehicle;
      } catch (error) {
        console.error('Error finding vehicles:', error);
        return null;
      }
    },
    vehicleByServiceStatus: async (
      _: never,
      { serviceName, serviceStatus }: { serviceName: string; serviceStatus: string }
    ) => {
      try {
        const vehicle = await findByServiceStatus(serviceName, serviceStatus);
        return vehicle;
      } catch (error) {
        console.error('Error finding vehicles:', error);
        return null;
      }
    }
  }
};
