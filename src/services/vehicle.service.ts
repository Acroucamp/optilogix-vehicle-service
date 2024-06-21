import { AppDataSource } from '../data-source';
import Vehicle from '../models/Vehicle';

export class VehicleService {
  private vehicleRepository = AppDataSource.getRepository(Vehicle);

  public createVehicle = async (
    vehicleData: Partial<Vehicle>,
  ): Promise<Vehicle> => {
    const vehicle = this.vehicleRepository.create(vehicleData);
    return await this.vehicleRepository.save(vehicle);
  };

  public getVehicles = async (): Promise<Vehicle[]> => {
    return await this.vehicleRepository.find();
  };

  public getVehicle = async (vehicleId: string): Promise<Vehicle> => {
    const vehicle = await this.vehicleRepository.findOne({
      where: { VehicleID: vehicleId },
    });

    if (!vehicle) {
      throw new Error(`Vehicle with ID ${vehicleId} not found`);
    }

    return vehicle;
  };

  public updateVehicle = async (
    vehicleId: string,
    vehicleData: string,
  ): Promise<Vehicle> => {
    const vehicle = await this.vehicleRepository.findOne({
      where: { VehicleID: vehicleId },
    });

    if (!vehicle) {
      throw new Error(`Vehicle with ID ${vehicleId} not found`);
    }

    Object.assign(vehicle, vehicleData);

    const updatedVehicle = this.vehicleRepository.save(vehicle);

    return updatedVehicle;
  };

  public deleteVehicle = async (vehicleId: string): Promise<void> => {
    const deletedVehicle = await this.vehicleRepository.delete(vehicleId);

    if (deletedVehicle.affected === 0) {
      throw new Error(`Vehicle with ID ${vehicleId} not found`);
    }
  };
}
