import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';

export class VehicleController {
  private vehicleService: VehicleService;

  constructor() {
    this.vehicleService = new VehicleService();
  }

  public createVehicle = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const vehicle = await this.vehicleService.createVehicle(req.body);
      return res.status(201).json(vehicle);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  };

  public getVehicles = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const vehicles = await this.vehicleService.getVehicles();
      return res.status(200).json(vehicles);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  };

  public getVehicle = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { vehicleId } = req.params;
    try {
      const vehicle = await this.vehicleService.getVehicle(vehicleId);
      return res.status(200).json({ vehicle });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  };
}
