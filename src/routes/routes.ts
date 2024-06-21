import { Router } from 'express';
import { VehicleController } from '../controllers/vehicle.controller';

const router = Router();
const vehicleController = new VehicleController();

router.post('/vehicles', vehicleController.createVehicle);
router.get('/vehicles', vehicleController.getVehicles);
router.get('/vehicles/:vehicleId', vehicleController.getVehicle);
router.put('/vehicles/:vehicleId', vehicleController.updateVehicle);
router.delete('/vehicles/:vehicleId', vehicleController.deleteVehicle);

export default router;
