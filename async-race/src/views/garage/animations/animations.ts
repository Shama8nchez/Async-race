import { driveMode } from '../../../api/engines';

export let myReq: number;

export async function animation(animTime: number, id: number, distanceLength: number): Promise<{ success: boolean, animTime: number, id: number }> {
  let start: null | number = null;
  const element = document.getElementById(`car-${id}`);

  function step(timestamp: number): void {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    if (element) element.style.transform = 'translateX(' + Math.min(progress / (animTime / 1000), distanceLength + 119) + 'px)';
    if (progress < 10 * distanceLength + 1190) myReq = window.requestAnimationFrame(step);
  }

  myReq = window.requestAnimationFrame(step);
  const { success } = await driveMode(id);
  if (!success) window.cancelAnimationFrame(myReq);
  return { success, animTime, id };
}

function getPosition(element: HTMLElement): { x: number, y: number } {
  const { top, left, width, height } = element.getBoundingClientRect();

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}

export function getDistance(element1: HTMLElement, element2: HTMLElement): number {
  const position1 = getPosition(element1);
  const position2 = getPosition(element2);
  
  return Math.hypot(position1.x - position2.x, position1.y - position2.y);
}
