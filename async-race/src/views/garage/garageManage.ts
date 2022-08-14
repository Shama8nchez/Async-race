import { carsGenerate } from './actions/generate';
import { carsActions } from './actions/carsActions';
import { changePage } from './actions/garagePages';
import { carMoving } from './actions/carMoving';

export function garageManage(page: number, car: number) {
  carsActions(page);
  carMoving(page);
  carsGenerate(car);
  changePage(page);
}
