import { drawCar } from './drawCar';

export function drawRoad(color: string, name: string, id: number): string {
  return `<div class="car">
  <div class="top-panel">
    <span class="car-name">${name}</span>
    <button class="button button-select" id="select-${id}">Select</button>
    <button class="button button-remove" id="remove-${id}">Remove</button>
  </div>
  <div class="animation-panel">
    <div id="car-${id}" class="car-image">
      ${drawCar(color)}
    </div>
    <div class="finish" id="flag-${id}">
      <img src="./assets/img/flag.svg" alt="finish" class="finish-flag">
    </div>
  </div>
  <div class="bottom-panel">
    <button class="button button-start" id="start-${id}">Start</button>
    <button class="button button-stop" id="stop-${id}">Stop</button>
  </div>
</div>`;
}