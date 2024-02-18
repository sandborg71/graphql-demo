import { AsyncNedb } from 'nedb-async';
import { VehicleData } from './types.js';

const db = new AsyncNedb<VehicleData>({ filename: './database/vehicles.db', autoload: true });

db.ensureIndex({ fieldName: 'id', unique: true });

export const saveVehicleData = async (vehicles: VehicleData[]): Promise<void> => {
  for (const vehicle of vehicles) {
    const { id } = vehicle;
    await db.asyncUpdate({ id }, vehicle, { upsert: true });
  }
};

export const findById = async (id: string): Promise<VehicleData[]> => await db.asyncFind({ id });

export const findByNamePart = async (namePart: string): Promise<VehicleData[]> => {
  const pattern = new RegExp(namePart, 'i');
  return await db.asyncFind({ name: pattern });
};

export const findByServiceStatus = async (
  serviceName: string,
  serviceStatus: string
): Promise<VehicleData[]> => {
  return await db.asyncFind({ services: { $elemMatch: { serviceName, status: serviceStatus } } });
};
