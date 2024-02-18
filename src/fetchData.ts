import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  VehicleData,
  // VehicleDataRecord,
  VehicleInfo,
  VehicleName,
  VehicleServiceStatus
} from './types.js';
import { findById, saveVehicleData } from './database.js';

const apiVehiclesBaseUrl = 'http://localhost:1337/vehicle';
const apiVehiclesListUrl = `${apiVehiclesBaseUrl}/list`;
const apiVehiclesInfoUrl = `${apiVehiclesBaseUrl}/info`;
const apiVehiclesServiceUrl = `${apiVehiclesBaseUrl}/services`;

async function fetchData(): Promise<void> {
  try {
    const listVehiclesResponse: AxiosResponse = await axios.get(apiVehiclesListUrl);
    const vehicles: VehicleName[] = listVehiclesResponse.data.vehicles;

    const vehiclesDataArray: VehicleData[] = await Promise.all(
      vehicles.map(async (vehicle) => {
        const { id } = vehicle;
        const infoResponsePromise = axios.get(apiVehiclesInfoUrl, { params: { id } });
        const serviceResponsePromise = axios.get(apiVehiclesServiceUrl, { params: { id } });
        const resultArray = await Promise.allSettled([infoResponsePromise, serviceResponsePromise]);

        const [info, services] = resultArray.map((result) =>
          result.status === 'fulfilled' && result.value.status === 200 ? result.value.data : {}
        ) as [VehicleInfo, VehicleServiceStatus];

        return { ...vehicle, ...info, ...services };
      })
    );

    await saveVehicleData(vehiclesDataArray);
    const test = await findById(vehiclesDataArray.at(-1)?.id || '');

    console.log('### All data saved. Example vehicle from db:', test);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error(
        'Error fetching data:',
        axiosError.response?.status,
        axiosError.response?.statusText
      );
    } else {
      console.error('Error fetching data:', (error as Error).message);
    }
  }
}

await fetchData();
