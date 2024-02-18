export type VehicleName = {
  name?: string;
  id: string;
};

export type VehicleInfo = {
  msidn: string;
  engineStatus: string;
  fleet: string;
  brand: string;
  countryOfOperation: string;
  chassisNumber: string;
  cassisSeries: string;
};

export type VehicleServiceStatus = {
  communicationStatus: string;
  services: Array<{
    serviceName: string;
    status: string;
    lastUpdate: string;
    reason?: string;
  }>;
};

export interface VehicleData {
  name?: string;
  id: string;
  msidn?: string;
  engineStatus?: string;
  fleet?: string;
  brand?: string;
  countryOfOperation?: string;
  chassisNumber?: string;
  cassisSeries?: string;
  communicationStatus?: string;
  services?: Array<{
    serviceName: string;
    status: string;
    lastUpdate: string;
    reason?: string;
  }>;
}

