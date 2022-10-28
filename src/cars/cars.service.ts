import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    }, 
    {
      id: uuid(),
      brand: 'Renault',
      model: 'Logan',
    }, 
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Onix Turbo'
    }
  ];

  findAll() {
    return  this.cars;
  }

  findOneById(id: string){
    const car = this.cars.find(car => car.id === id);

    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(body: any){
    body.id = uuid();
    this.cars.push(body);
    return body;
  }

  update(id: string, body: any){
    let car = this.findOneById(id);
    return car;
  }

  delete(id: string){
    let car = this.findOneById(id);
    return car;
  }

}
