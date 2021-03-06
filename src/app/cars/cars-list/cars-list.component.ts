import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Car } from "../models/car";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {
  totalCost : number;
  grossCost : number;

  cars : Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'CB2800S',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 5500,
      isFullyDamaged: true
    },
    {
      id: 1,
      model: 'Ford Focus',
      plate: 'CB2650Y',
      deliveryDate: '22-02-2017',
      deadline: '05-01-2016',
      client: {
        firstName: 'Janina',
        surname: 'Kowalska'
      },
      cost: 3430,
      isFullyDamaged: false
    },
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'CB2800S',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 5500,
      isFullyDamaged: true
    }
  ]

  constructor() { }

  ngOnInit() {
    this.countTotalCost();
  }

  countTotalCost() : void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }
}
