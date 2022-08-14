import { startEngine, stopEngine } from '../../../api/engines';
import { getDistance, animation, myReq } from '../animations/animations';
import { getCars } from '../../../api/cars';
import { ICars } from '../../../types';
import { createWinner } from '../../../api/winners';

async function startDriving(id: number): Promise<{ success: boolean, animTime: number, id: number }> {
  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);
  const distanceBetween = getDistance(<HTMLElement>document.getElementById(`car-${id}`), <HTMLElement>document.getElementById(`flag-${id}`));
  return animation(time, id, distanceBetween);  
}

async function race(page: number): Promise<{ success: boolean, animTime: number, id: number }> {
  const cars = await getCars(page);
  const promises = cars.map((car: ICars) => startDriving(car.id));
  const raceResult = await Promise.all(promises);
  const finishCars = raceResult.sort((a, b) => (a.animTime - b.animTime)).filter(item => item.success);
  return finishCars[0];
}

export function carMoving(page: number): void {
  document.body.addEventListener('click', async (e: Event) => {
    if ((<Element>e.target).classList.contains('button-start')) {
      const id = +(<HTMLElement>e.target)?.id.slice(6);
      startDriving(id);
    }
  
    if ((<Element>e.target).classList.contains('button-stop')) {
      const id = +(<HTMLElement>e.target)?.id.slice(5);
      const element = document.getElementById(`car-${id}`);
      await stopEngine(id);
      if (element) element.style.transform = 'translateX(0)';
      window.cancelAnimationFrame(myReq);
    }
  
    if ((<Element>e.target).classList.contains('button-race')) {
      const winner = await race(page);
      await createWinner({ id: winner.id, time: winner.animTime, wins: 1 });
    }
  });
}