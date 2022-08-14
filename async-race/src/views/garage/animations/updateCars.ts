import { getCars } from '../../../api/cars';
import { ICars } from   '../../../types';
import { drawRoad } from './drawRoad';

const viewGarage = <Element>document.querySelector('.garage');
const carNameCreate = <HTMLInputElement>document.querySelector('#car-name-create');
const carColorCreate = <HTMLInputElement>document.querySelector('.car-color-create');
const carNameUpdate = <HTMLInputElement>document.querySelector('#car-name-update');
const carColorUpdate = <HTMLInputElement>document.querySelector('.car-color-update');
const buttonCreate = document.querySelector('.button-create');
const buttonUpdate = document.querySelector('.button-update');

export { carNameCreate, carColorCreate, carNameUpdate, carColorUpdate, buttonCreate, buttonUpdate };

export function beforeUpdate(): void {
  carNameUpdate.disabled = false;
  carColorUpdate.disabled = false;
  (<HTMLInputElement>buttonUpdate).disabled = false;
  carNameCreate.disabled = true;
  carColorCreate.disabled = true;
  (<HTMLInputElement>buttonCreate).disabled = true;
}

export function afterUpdate(): void {
  carNameUpdate.disabled = true;
  carColorUpdate.disabled = true;
  (<HTMLInputElement>buttonUpdate).disabled = true;
  carNameCreate.disabled = false;
  carColorCreate.disabled = false;
  (<HTMLInputElement>buttonCreate).disabled = false;
  carNameUpdate.value = '';
  carColorUpdate.value = '';
}

export function drawGarage(page = 1): void {
  const data = getCars(page);
  data.then((i) => viewGarage.innerHTML = `${i.map((car: ICars) => `${drawRoad(car.color, car.name, car.id)}`).join('')}`);
}