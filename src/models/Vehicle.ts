import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vehicles')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  VehicleID!: string;

  @Column()
  VehicleMake!: string;

  @Column()
  VehicleModel!: string;

  @Column()
  VehicleProdYear!: number;

  @Column({
    default: 1,
  })
  Active!: number;
}

export default Vehicle;
