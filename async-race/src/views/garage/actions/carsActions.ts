import { createCar, deleteCar, getCar, updateCar } from '../../../api/cars';
import { beforeUpdate, afterUpdate, drawGarage, carNameCreate, carColorCreate, carNameUpdate, carColorUpdate, buttonCreate, buttonUpdate  } from '../animations/updateCars';

export function carsActions(page = 1): void {
  let idCar: number;
  drawGarage(page);
  buttonCreate?.addEventListener('click', async (): Promise<void> => {
    const carName = carNameCreate?.value;
    const carColor = carColorCreate?.value;
    if (carName) {
      await createCar({ name: carName, color: carColor });
    }
  });

  buttonUpdate?.addEventListener('click', async (): Promise<void> => {
    const carName = carNameUpdate?.value;
    const carColor = carColorUpdate?.value;
    if (carName) {
      await updateCar(idCar, { name: carName, color: carColor });
      drawGarage(page);
      afterUpdate();
    }
  });

  document.body.addEventListener('click', async (e: Event): Promise<void> => {
    if ((<Element>e.target).classList.contains('button-remove')) {
      await deleteCar(+(<HTMLElement>e.target)?.id.slice(7));
      drawGarage(page);
    }

    if ((<Element>e.target).classList.contains('button-select')) {
      beforeUpdate();
      idCar = +(<HTMLElement>e.target)?.id.slice(7);
      const car = await getCar(idCar);
      carNameUpdate.value = car.name;
      carColorUpdate.value = car.color;
    }
  });
}