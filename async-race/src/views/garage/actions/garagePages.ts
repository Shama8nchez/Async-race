import { carsActions } from './carsActions';
import { carMoving } from './carMoving';

const garagePage = <Element>document.querySelector('.garage-subtitle');
const buttonNext = document.querySelector('.garage-button-next');
const buttonPrev = document.querySelector('.garage-button-prev');

export async function changePage(page: number): Promise<void> {
  buttonNext?.addEventListener('click', async (): Promise<void>  => {
    page++;
    garagePage.innerHTML = `Page: ${page}`;
    carsActions(page);
    carMoving(page);
    (<HTMLInputElement>buttonPrev).disabled = false;
  });

  buttonPrev?.addEventListener('click', async (): Promise<void>  => {
    page--;
    garagePage.innerHTML = `Page: ${page}`;
    carsActions(page);
    carMoving(page);
    if (page !== 1) {
      (<HTMLInputElement>buttonPrev).disabled = false;      
    } else {
      (<HTMLInputElement>buttonPrev).disabled = true;
    }
  });
}